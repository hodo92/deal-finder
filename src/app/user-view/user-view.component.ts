import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { SaveProductService } from '../save-product.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
  providers: [SaveProductService]
})
export class UserViewComponent implements OnInit {
  constructor(private saveProductService: SaveProductService) { }
  savedProducts: AngularFireList<Product> = null;
  ngOnInit() {
    this.savedProducts = this.saveProductService.getProducts();
  }

}
