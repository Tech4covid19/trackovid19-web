import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusConfinement',
})
export class StatusConfinementPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
        return 'blue';
      case 4:
        return 'orange';
      case 300:
        return 'red';
    }
  }
}
