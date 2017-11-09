import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AmazonProductApiService } from '../amazon-product-api.service';

@Component({
  selector: 'app-amazon-form',
  templateUrl: './amazon-form.component.html',
  styleUrls: ['./amazon-form.component.css'],
  providers: [ AmazonProductApiService ]
})
export class AmazonFormComponent implements OnInit {
  results: any[]=null;
 constructor(private amazonProductService: AmazonProductApiService) { }

 getAmazonResults(keyword: string) {
   let today = new Date().toISOString();
   this.amazonProductService.getByCategoryAndKeyword(keyword).subscribe(response => {
       this.results = response.json();
       console.log(this.results);
   });
 }
  ngOnInit() {
  }

}
