import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { cartState } from './cart.state';

export const selectStore = (state: AppState) => state.cart;

export const selectAllProducts = createSelector(
  selectStore,
  (state: cartState) => state.products
);
export const selectAllProductCount = createSelector(
  selectStore,
  (state: cartState) => state.count
);

