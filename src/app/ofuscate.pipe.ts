import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ofuscate'
})
export class OfuscatePipe implements PipeTransform {

  transform(value: any, isVisible:boolean , ...args: any[]): any{
    return !isVisible ? value.replace(/./g, '*') : value;
  }

}
