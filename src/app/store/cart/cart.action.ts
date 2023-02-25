import { createAction, props } from '@ngrx/store';
import { cart } from 'src/app/cart';
import { Product } from 'src/app/product';

export const addToCartAction = createAction(
  'ADD_TO_CART',
  props<{ product: Product }>()
);
export const deleteFromCart = createAction(
  'DELETE_FROM_CART',
  props<{ product: cart }>()
);
