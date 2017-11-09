import { Pipe, PipeTransform } from '@angular/core';
import { Product} from './product.model'

@Pipe({
  name: 'price',
  pure: false
  })
  export class PricePipe implements PipeTransform {

    transform(input: Product[], desiredPrice) {
      var output: Product[] = [];
   if(desiredPrice === "inexpensiveProducts") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].expensive === false) {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desiredPrice === "expensiveProducts") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].expensive === true) {
         output.push(input[i]);
       }
     }
     return output;
   } else {
     return input;
   }
  }
}
