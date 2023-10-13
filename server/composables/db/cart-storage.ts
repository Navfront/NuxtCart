import { ICart } from '~/types'

export default function useCartStorage () {
  const storage = useStorage<ICart>('carts')

  async function getOrCreateCartById (token: string) {
    const cart = await storage.getItem(token)

    if (!cart) {
      const newCart = {
        id: token,
        products: [],
        withSetup: false
      }
      await storage.setItem(token, newCart)
      return newCart
    } else {
      return cart
    }
  }

  async function addProductById (token: string, prodId: string) {
    const cart = await getOrCreateCartById(token)
    const prodCondidate = cart.products.find(p => p.id === prodId)
    if (prodCondidate) {
      prodCondidate.count++
    } else {
      cart.products.push({ id: prodId, count: 1 })
    }
    await storage.setItem(token, cart)
    return cart
  }

  async function removeProductById (token: string, prodId: string) {
    const cart = await getOrCreateCartById(token)
    const prodCondidate = cart.products.find(p => p.id === prodId)
    if (prodCondidate && prodCondidate.count > 1) {
      prodCondidate.count--
    } else {
      cart.products = cart.products.filter(p => p.id !== prodId)
    }
    return cart
  }

  async function setWithSetup (token: string, bool: boolean) {
    const cart = await getOrCreateCartById(token)
    cart.withSetup = bool
    storage.setItem(token, cart)
    return cart
  }

  return {
    getOrCreateCartById,
    addProductById,
    removeProductById,
    setWithSetup
  }
}
