import { Action, createReducer, on, props } from '@ngrx/store';
import { cart } from 'src/app/cart';
import { addToCartAction, deleteFromCart } from './cart.action';
import { cartState } from './cart.state';

export const initialState: cartState = {
  products: [],
  count: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(addToCartAction, (state, { product }) => {
    const cart = [...state.products];
    const tempCart = cart.filter((p) => p.id !== product.id);
    const index = cart.findIndex((p) => p.id === product.id);
    if (index === -1) {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      });
    } else {
      return {
        ...state, // <--- Spread operator
        products: [
          ...tempCart,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: cart[index].quantity + 1,
          },
        ],
      };
    }
    return { ...state, products: cart, count: state.count + 1 };
  }),
  on(deleteFromCart, (state, { product }) => {
    console.log('product' + JSON.stringify(product));
    const cart = [...state.products];
    console.log('cart' + JSON.stringify(cart));
    const tempCart = cart.filter((p) => p.id !== product.id);
    console.log('tempcart' + JSON.stringify(tempCart));
    const index = cart.findIndex((p) => p.id === product.id);

    if (index === -1) {
      return { ...state, products: cart, count: state.count - 1 };
    } else {
      return { ...state, products:tempCart, count: state.count - 1 };
    }
  })
);
