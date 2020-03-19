import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
        return 'Infeção confirmada'
      case 2:
        return 'Caso suspeito'
        break
      case 3:
       return 'Recuperado'
        break
      case 4:
        return 'Presumo que não'
      default:
        return value
    }

  }

}
