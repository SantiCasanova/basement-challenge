import { initialState } from './CartContext';
import { Product, Cart } from '../components/interfaces/types'

type ActionType =
  | { type: 'ADD_TO_CART', payload: Product }
  | { type: 'ADD_QTY', payload: Cart }
  | { type: 'REMOVE_QTY', payload: Cart }

export const cartReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
      if (itemIndex === -1) {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      } else {
        return {
          ...state,
          cart: state.cart.filter(item => item.id === action.payload.id ? (item.quantity++) : item.quantity)
        }
      }
    case "ADD_QTY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id ? (item.quantity++) : item.quantity
        ),
      };
    case "REMOVE_QTY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id ? (item.quantity--) : item.quantity
        ),
      };
    default:
      return state;
  }
};