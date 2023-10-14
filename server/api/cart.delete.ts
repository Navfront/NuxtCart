import useCartStorage from '../composables/db/cart-storage'
import useBearer from '../composables/use-bearer'
import asyncDelay from './../composables/use-async-delay'

export default defineEventHandler(async event => {
  const { token } = useBearer(event)
  const { id } = await readBody<{ id: string }>(event)

  const { removeProductById } = useCartStorage()

  return await asyncDelay(1000, removeProductById, token, id)
})
