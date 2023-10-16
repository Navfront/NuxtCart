export interface IProduct {
  id: string
  title: string
  descr: string
  article: string
  img: string
  priceFrom: number
  priceTo: number
}

export interface ICartProduct extends Omit<IProduct, 'priceFrom' | 'priceTo'> {
  count: number
  price: number
}

export interface ICart {
  id: string
  products: ICartProduct[]
  withSetup: boolean
  lastSeenProducts: IProduct[]
  cartMessage: string
}

export interface IStore extends Omit<ICart, 'id'> {
  token: string
  isLoading: boolean
}
