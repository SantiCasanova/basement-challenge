import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";
import { products } from '../mock/products';
import { cart } from '../mock/cart';

const CartContext = createContext<any>([])

export const initialState = {
  products: products,
  cart: cart
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const CartProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default CartProvider;