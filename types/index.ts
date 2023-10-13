export interface IProduct {
  id: string
  title: string
  descr: string
  article: string
  img: string
  price: number
}

export interface ICartProduct extends Pick<IProduct, 'id'> {
  count: number
}

export interface ICart {
  id: string
  products: ICartProduct[]
  withSetup: boolean
}
