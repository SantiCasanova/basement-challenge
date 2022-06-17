import { initialState } from './CartContext';
import { Product } from '../components/interfaces/types'

type ActionType =
  | { type: 'ADD_TO_CART', payload: Product }
  | { type: 'REMOVE_FROM_CART' }
  | { type: 'CHANGE_CART_QTY' };

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

    // case "REMOVE_FROM_CART":
    //   return {
    //     ...state,
    //     cart: state.cart.filter((c) => c.id !== action.payload.id),
    //   };
    // case "CHANGE_CART_QTY":
    //   return {
    //     ...state,
    //     cart: state.cart.filter((c) =>
    //       c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
    //     ),
    //   };
    default:
      return state;
  }
};