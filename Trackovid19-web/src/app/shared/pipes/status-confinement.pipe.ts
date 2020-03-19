import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusConfinement'
})
export class StatusConfinementPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 4:
        return 'blue'
      case 3:
        return 'orange'
      case 1:
       return 'blue'
      case 2:
        return 'orange'
   
    }
  }

}
