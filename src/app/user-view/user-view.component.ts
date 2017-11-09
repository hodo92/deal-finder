import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
  providers: [ProductService]
})
export class UserViewComponent implements OnInit {
  products: AngularFireList<any[]>;
  constructor(private productService: ProductService) { }

  
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
