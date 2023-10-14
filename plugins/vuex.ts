import { createStore } from 'vuex'
import { ICart, IStore } from '~/types'

const store = createStore({
  state () {
    return {
      token: '',
      cartProducts: [],
      withSetup: false,
      isLoading: false
    }
  },
  getters: {
    getToken: state => state.token,
    isLoading: state => state.isLoading
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload
    },
    setIsLoading: (state, payload) => {
      state.isLoading = payload
    }
  },
  actions: {
    async getCart () {
      const token = this.state.token
      if (token) {
        this.commit('setIsLoading', true)
        $fetch<ICart>('/api/cart')
          .then(r => {
            this.commit('setToken', r.id)
          })
          .finally(() => {
            this.commit('setIsLoading', false)
          })
      }
    }
  }
})

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(store)
})
