import { IProduct } from '~/types'

export default function generateProducts (count: number) {
  const products: IProduct[] = []
  for (let i = 1; i <= count; i++) {
    const id = i.toString()
    const title = `Вытяжное устройство G2H v.${i}.0`
    const descr = `12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия`
    const article = `Артикул: G2H106${i}`
    const img = `p${i}.png`
    const price = Math.round(Math.random() * (500 - 50) + 50)

    const product = { id, title, descr, article, img, price }
    products.push(product)
  }
  return products
}
