import { createContext } from 'react';
import { Product } from '../product/types';

export const CartContext = createContext<Product[]>([])