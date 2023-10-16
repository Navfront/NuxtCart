import { ICart } from '~/types'

export default function useCartStorage () {
  const storage = useStorage<ICart>('carts')

  async function getOrCreateCartById (token: string) {
    const cart = await storage.getItem(token)
    if (!cart) {
      const newCart: ICart = {
        id: token,
        products: generateProduct(Math.round(Math.random() * 4 + 1), false),
        withSetup: false,
        lastSeenProducts: generateProduct(24, true)
      }

      await storage.setItem(token, newCart)
      return newCart
    } else {
      return cart
    }
  }

  async function setCountProductById (
    token: string,
    prodId: string,
    count: number
  ) {
    const cart = await getOrCreateCartById(token)

    const prodCondidate = cart.products.find(p => p.id === prodId)
    if (prodCondidate) {
      prodCondidate.count = count
    } else {
      cart.products.push({ ...generateProduct(1, false)[0], count })
    }
    await storage.setItem(token, cart)
    return cart
  }

  async function deleteProductById (token: string, prodId: string) {
    const cart = await getOrCreateCartById(token)
    cart.products = cart.products.filter(p => p.id !== prodId)
    await storage.setItem(token, cart)
    return cart
  }

  async function setWithSetup (token: string, bool: boolean) {
    const cart = await getOrCreateCartById(token)
    cart.withSetup = bool
    storage.setItem(token, cart)
    return cart
  }

  async function deleteAllProducts (token: string) {
    const cart = await getOrCreateCartById(token)
    cart.products = []
    storage.setItem(token, cart)
    return cart
  }

  return {
    getOrCreateCartById,
    setCountProductById,
    deleteProductById,
    setWithSetup,
    deleteAllProducts
  }
}
