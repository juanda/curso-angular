import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sin'
})
export class SinPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.sin(Math.PI * value/180);
  }

}
