import { Injectable } from '@angular/core';
import { from, switchMap } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  productList = from(fetch('https://dummyjson.com/products')).pipe(
    switchMap((response) => response.json())
  );
}
