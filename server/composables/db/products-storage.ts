import { IProduct } from '~/types'
import generateProducts from './../../utils/generate-product'

export default function useProductStorage () {
  const products: IProduct[] = generateProducts(30)

  return {
    getProducts: () => products,
    getProductById: (id: string) => products.find(p => p.id === id)
  }
}
