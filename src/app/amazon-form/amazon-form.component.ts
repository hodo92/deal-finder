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

 getAmazonResults(category: string, keyword: string) {
   this.amazonProductService.getByCategoryAndKeyword(category, keyword).subscribe(response => {
       this.results = response.json();
   });
 }
  ngOnInit() {
  }

}
