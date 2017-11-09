import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class ProductService {
  products: AngularFireList<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.products = database.list('products');
  }

  getProducts() {

    return this.products;
  }

}
