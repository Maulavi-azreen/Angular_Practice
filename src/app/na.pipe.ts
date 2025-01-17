// purpose : If value is not empty or undefined or null then show the value otherwise show na
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(value!=='' && value!==null && value!==undefined){
      return value;
    }
    else{
    return 'NA';
    }
  }

}
