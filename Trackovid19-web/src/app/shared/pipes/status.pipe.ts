import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorCard',
})
export class StatusPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
        return 'purple';
      case 2:
        return 'red';
      case 3:
        return 'green';
      case 4: // TO FIX:
        return 'blue';
      case 100:
        return 'orange';
      case 200:
        return 'blue';
    }
  }
}
