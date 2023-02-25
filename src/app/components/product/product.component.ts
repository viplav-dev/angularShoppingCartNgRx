import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCartAction } from 'src/app/store/cart/cart.action';
import { cartState } from 'src/app/store/cart/cart.state';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private store: Store<cartState>
  ) {}
  productList: Product[] = [];

  ngOnInit() {
    this.productService.productList.subscribe((data) => {
      this.productList = data['products'];
    });
  }
  onAddToCart(selectedProduct: Product) {
    this.store.dispatch(addToCartAction({ product: selectedProduct }));
  }
}
