import { createStore, mapGetters } from 'vuex'
import { ICart, IStore } from '~/types'
let timeout: { [N: string]: NodeJS.Timeout } = {}

function getAuthHeader (token: string) {
  return token ? { Authorization: `Bearer ${token}` } : undefined
}

const store = createStore<IStore>({
  state () {
    return {
      token: '',
      products: [],
      withSetup: false,
      lastSeenProducts: [],
      isLoading: false,
      cartMessage: ''
    }
  },
  getters: {
    getToken: state => state.token,
    getIsLoading: state => state.isLoading,
    getProducts: state => state.products,
    getWithSetup: state => state.withSetup,
    getLastSeen: state => state.lastSeenProducts,
    getProductsCount: state => state.products.length,
    getCartMessage: state => state.cartMessage
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload
    },
    setIsLoading: (state, payload) => {
      state.isLoading = payload
    },
    setProducts: (state, payload) => {
      state.products = payload
    },
    setLastSeenProducts: (state, payload) => {
      state.lastSeenProducts = payload
    },
    setWithSetup: (state, payload) => {
      state.withSetup = payload
    },
    setProductCount: (state, payload) => {
      const index = state.products.findIndex(p => p.id === payload.id)
      if (index > -1) {
        const target = { ...state.products[index] }
        target.count = payload.count
        state.products[index] = target
      }
    },
    deleteProductById: (state, payload) => {
      state.products = state.products.filter(prod => prod.id !== payload)
    },
    deleteAllProducts: state => {
      state.products = []
    },
    setCartMessage: (state, payload) => {
      state.cartMessage = payload
    }
  },
  actions: {
    getCart: async store => {
      const token = store.state.token
      if (!token) {
        store.commit('setIsLoading', true)
        $fetch<ICart>('/api/cart')
          .then(res => {
            store.commit('setToken', res.id)
            store.commit('setProducts', res.products)
            store.commit('setLastSeenProducts', res.lastSeenProducts)
            store.commit('setWithSetup', res.withSetup)
          })
          .finally(() => store.commit('setIsLoading', false))
      }
    },
    deleteProduct: async (store, prodId) => {
      const token = store.state.token
      return $fetch<ICart>('/api/cart', {
        method: 'POST',
        body: { id: prodId },
        headers: getAuthHeader(token)
      }).then(() => {
        store.commit('deleteProductById', prodId)
      })
    },
    setProdCount: async (store, { prodId, count }) => {
      const token = store.state.token
      const oldData = store.state.products.find(p => p.id === prodId)

      store.commit('setProductCount', { id: prodId, count })
      if (timeout.count) {
        clearTimeout(timeout.count)
      }
      timeout.count = setTimeout(() => {
        $fetch<ICart>('/api/cart', {
          method: 'POST',
          body: { id: prodId, count },
          headers: getAuthHeader(token)
        })
          .then(() => {})
          .catch(() => {
            oldData?.count &&
              store.commit('setProductCount', {
                id: prodId,
                count: oldData.count
              })
          })
      }, 300)
    },
    deleteProducts: async store => {
      const token = store.state.token
      const oldData = store.state.products.slice()
      store.commit('setIsLoading', true)
      if (token) {
        return $fetch('/api/cart', {
          method: 'DELETE',
          body: {
            all: true
          },
          headers: getAuthHeader(token)
        })
          .then(() => {
            store.commit('deleteAllProducts')
          })
          .catch(() => {
            store.commit('setProducts', oldData)
          })
          .finally(() => {
            store.commit('setIsLoading', false)
          })
      }
    },
    setWithSetupChecked: async (store, isChecked) => {
      const token = store.state.token
      const oldData = !isChecked
      store.commit('setWithSetup', isChecked)
      if (token) {
        if (timeout.setup) {
          clearTimeout(timeout.setup)
        }
        timeout.setup = setTimeout(() => {
          $fetch('/api/cart', {
            method: 'POST',
            body: {
              setup: isChecked
            },
            headers: getAuthHeader(token)
          }).catch(() => {
            store.commit('setWithSetup', oldData)
          })
        }, 300)
      }
    },
    submitOrder: async store => {
      const body = {
        token: store.state.token,
        withSetup: store.state.withSetup,
        total: store.state.products.reduce((a, c) => a + c.count * c.price, 0),
        products: store.state.products.map(p => ({
          id: p.id,
          count: p.count
        }))
      }

      return $fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body
      }).then(data => {
        store.commit('setCartMessage', body.total)
        store.commit('deleteAllProducts')
        console.log('SENDING ORDER:', body)
      })
    }
  }
})

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(store)
})
