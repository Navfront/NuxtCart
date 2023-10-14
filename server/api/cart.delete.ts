import useCartStorage from '../composables/db/cart-storage'
import useBearer from '../composables/use-bearer'
import asyncDelay from './../composables/use-async-delay'

export default defineEventHandler(async event => {
  const { token } = useBearer(event)
  const { id, all } = await readBody<{ id?: string; all?: boolean }>(event)

  const { deleteProductById, deleteAllProducts } = useCartStorage()
  if (all) {
    return await asyncDelay(1500, deleteAllProducts, token)
  }
  if (id) {
    return await asyncDelay(1500, deleteProductById, token, id)
  }
})
