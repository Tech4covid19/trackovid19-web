import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconPlaceholder'
})
export class IconPlaceholderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch(value) {
      case 4:
        return 'assets/img/illustrations/dashboard/heart.svg';
      case 2:
        return 'assets/img/illustrations/dashboard/user-orange.svg'
      case 5:
        return 'assets/img/illustrations/dashboard/user-red.svg'
      case 3:
        return 'assets/img/illustrations/dashboard/green.svg'
      case 1:
        return 'assets/img/illustrations/dashboard/disease.svg'
    }
  }

}
