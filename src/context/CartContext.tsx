import { createContext, useContext, useReducer } from "react";
import { Product } from '../components/interfaces/types';
import { products } from '../product/mock'
import { cartReducer } from "./Reducers";

const CartContext = createContext<Product[]>([])

interface Props {
  children: JSX.Element | JSX.Element[]
}

const CartProvider = ({ children }: Props) => {

  const initialState = {
    products: products,
    cart: []
  }

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

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