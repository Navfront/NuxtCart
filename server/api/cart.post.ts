import { ICart } from '~/types'
import useCartStorage from '../composables/db/cart-storage'
import useBearer from '../composables/use-bearer'
import asyncDelay from './../composables/use-async-delay'

export default defineEventHandler(async event => {
  const { token } = useBearer(event)
  const { id, setup, count } = await readBody<{
    id?: string
    setup?: boolean
    count?: string
  }>(event)

  const { setCountProductById, setWithSetup } = useCartStorage()

  let cart: ICart | null = null
  if (id && count) {
    cart = await asyncDelay(500, setCountProductById, token, id, count)
  }
  if (setup) {
    cart = await asyncDelay(500, setWithSetup, token, setup)
  }
  return cart
})
