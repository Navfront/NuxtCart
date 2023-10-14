import useProductStorage from '../composables/db/products-storage'
import asyncDelay from '../composables/use-async-delay'

export default defineEventHandler(async event => {
  const { getProductById, getProducts } = useProductStorage()
  const { id } = getQuery(event)
  if (id) {
    const product = await asyncDelay(1000, getProductById, id)
    if (!product) {
      setResponseStatus(event, 404, 'Not found!')
      return {}
    }
    return product
  }
  return await asyncDelay(1000, getProducts)
})
