import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconPlaceholderConfinement',
})
export class IconPlaceholderConfinementPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
        return 'assets/img/illustrations/dashboard/heart.svg';
      case 4:
        return 'assets/img/illustrations/dashboard/user-orange.svg';
      case 300:
        return 'assets/img/illustrations/dashboard/user-red.svg';
    }
  }
}
