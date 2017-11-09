import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class SaveProductService {
  products: AngularFireList<Product>;
  constructor(private af: AngularFireDatabase) {
    this.products = af.list('products');
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  getProducts() {
    return this.products;
  }
  // deleteProduct(selectedProduct) {
  //   let foundProduct = this.getProductById(selectedProduct.$key);
  //   foundProduct.remove();
  // }
  // getProductById(productId: string){
  //   return this.af.object('products/' + productId);
  // }
}
