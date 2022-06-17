export interface Product {
  price: number,
  size: 'S' | 'M' | 'L' | 'XL',
  image: string,
  title: string,
  id: number,
  quantity: number
}

export interface Cart extends Product {
  quantity: number
}