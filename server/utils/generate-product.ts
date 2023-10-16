import { IProduct, ICartProduct } from '~/types'
import { v4 as uuidv4 } from 'uuid'

export default function generateProducts (
  count: number,
  isLastSeen: boolean = false
) {
  const products: IProduct[] & ICartProduct[] = []
  for (let i = 1; i <= count; i++) {
    const id = uuidv4()
    const title = `Вытяжное устройство G2H v.${i}.0`
    const descr = `${Math.round(Math.random() * 20 + 13)}-${Math.round(
      Math.random() * 40 + 23
    )}/${Math.round(
      Math.random() * 100 + 20
    )} м<sup>3</sup>/ч / гидрорегулируемый расход / от датчика присутствия`
    const article = `Артикул: G2H106${i}`
    const img = `img/products/p${Math.round(Math.random() * 3 + 1)}.png`
    const price1 = Math.round(Math.random() * (33000 - 50) + 500)
    const price2 = Math.round(Math.random() * (33000 - 50) + 500)
    const priceFrom = Math.min(price1, price2)
    const priceTo = Math.max(price1, price2)
    const count = Math.round(Math.random() * 2 + 3)

    if (isLastSeen) {
      const lastSeenProd: IProduct = {
        id,
        title,
        descr,
        article,
        img,
        priceFrom,
        priceTo
      }
      products.push(lastSeenProd)
    } else {
      const cartProd: ICartProduct = {
        id,
        title,
        descr,
        article,
        img,
        price: price1,
        count
      }
      products.push(cartProd)
    }
  }
  return products
}
