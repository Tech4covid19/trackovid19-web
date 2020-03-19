import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorCard'
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 4:
        return 'blue'
      case 3:
        return 'green'
      case 1:
       return 'purple'
      case 2:
        return 'orange'
   
    }

  }

}
