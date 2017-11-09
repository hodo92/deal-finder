import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() childProducts;
  constructor() { }

  // saveRoverImages(date, camera){
  //     this.marsRoverPhotos.saveImages(date, camera);
  //     alert("Your item has been saved to the database.")
  //   }

  ngOnInit() {
  }

}
