import { cart } from 'src/app/cart';

export interface cartState {
  products: cart[];
  count: number;
}
