import useCartStorage from '../composables/db/cart-storage'
import asyncDelay from '../composables/use-async-delay'
import useBearer from '../composables/use-bearer'

export default defineEventHandler(async event => {
  const { token } = useBearer(event)
  const { getOrCreateCartById } = useCartStorage()

  return await asyncDelay(500, getOrCreateCartById, token)
})
