import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { cart } from 'src/app/cart';
import { Product } from 'src/app/product';
import {
  selectAllProductCount,
  selectAllProducts,
} from 'src/app/store/cart/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<cart[]>;
  count$: Observable<number>;
  price: number;

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select(selectAllProducts);
    this.count$ = this.store.select(selectAllProductCount);
    this.cart$.subscribe((data) => {
      this.price = data.reduce((acc, product) => acc + product.price*product.quantity, 0);
    });
  }
  ngOnInit(): void {}

  removeFromCart(deleteProduct: cart) {
    this.store.dispatch({ type: 'DELETE_FROM_CART', product: deleteProduct });
  }
}
