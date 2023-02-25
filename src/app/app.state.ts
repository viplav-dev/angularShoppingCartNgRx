
import { cartState } from './store/cart/cart.state';

export interface AppState {
  readonly cart: cartState;
}
