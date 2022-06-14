import { CartContext } from "./CartContext";
import { Product } from '../product/types';

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const CartProvider = ({ children }: Props) => {
  return (
    <CartContext.Provider value={[]}>{children}</CartContext.Provider>
  )
}

export default CartProvider