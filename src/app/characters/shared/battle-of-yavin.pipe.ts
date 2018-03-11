import {Pipe, PipeTransform} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Pipe({
  name: 'battleOfYavin'
})
export class BattleOfYavinPipe implements PipeTransform {

  transform(year: number): any {
    if (year !== null) {
      return (year <= 0) ? Math.abs(year) + '\xa0BBY' : year + '\xa0ABY';
    } else {
      return;
    }
  }

}
