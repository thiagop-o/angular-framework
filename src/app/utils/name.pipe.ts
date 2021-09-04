
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  

  transform(value: any, args?: any): any {
    switch (value) {
      case 1:
        return 'Luke'
        break;
      case 2:
        return 'Anakin'
        break;
      case 3:
        return 'Chewie'
        break;
      case 4:
        return 'Léia'
        break;
      case 5:
        return 'Palpatine'
        break;
      case 6:
        return 'Han Solo'
        break;
      case 7:
        return 'R2-D2'
        break;
      case 8:
        return 'C3-PO'
        break;
      case 9:
        return 'Lando'
        break;
      case 10:
        return 'Mestre Yoda'
        break;
      default:
        return value
        break;
    }

    

  }

}
