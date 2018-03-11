import {Pipe, PipeTransform} from '@angular/core';
import {Character} from './character.model';

@Pipe({
  name: 'birthYear'
})
export class BirthYearPipe implements PipeTransform {
  static MIN_YEAR_ANY = -1000;
  static MAX_YEAR_ANY = 100;

  transform(people: Character[], min: any, max: any): Character[] {
    if (min === -1000 && max === 100) {
      return people;
    }
    if (!people) {
      return [];
    }
    if (min && max) {
      return people.filter((c: Character) => {
        const birthday: number = this.universeToNumberYear(c.birth_year);
        return birthday !== null && min <= birthday && birthday <= max;
      });
    } else {
      return people;
    }
  }

  /**
   * Parses BBY/ABY year and returns -{number} for BBY and {number} for ABY year
   * @param {string} dateString
   * @returns {number}
   */
  private universeToNumberYear(dateString: string): number {

    if (dateString.endsWith('BBY')) {
      return -Number(dateString.substr(0, dateString.length - 3));
    } else if (dateString.endsWith('ABY')) {
      return Number(dateString.substr(0, dateString.length - 3));
    }
    // can't parse the date or unknown
    return null;
  }

}
