import { ICart } from '~/types'
import useCartStorage from '../composables/db/cart-storage'
import useBearer from '../composables/use-bearer'
import asyncDelay from './../composables/use-async-delay'

export default defineEventHandler(async event => {
  const { token } = useBearer(event)
  const { id, setup } = await readBody<{ id?: string; setup?: boolean }>(event)

  const { addProductById, setWithSetup } = useCartStorage()

  let cart: ICart | null = null
  if (id) {
    cart = await asyncDelay(500, addProductById, token, id)
  }
  if (setup) {
    cart = await asyncDelay(500, setWithSetup, token, setup)
  }
  return cart
})
