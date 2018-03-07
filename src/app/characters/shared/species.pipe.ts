import {Pipe, PipeTransform} from '@angular/core';
import {Character} from './character.model';
import {Species} from './species.model';

@Pipe({
  name: 'species'
})
export class SpeciesPipe implements PipeTransform {

  transform(people: Character[], species: Species[]): Character[] {
    if (!people) {
      return [];
    }
    if (species && species.length > 0) {
      const speciesUris: string[] = species.map((s: Species) => s.url);
      return people.filter((c: Character) => c.species.some((speciesUri: string) => speciesUris.indexOf(speciesUri) > -1));
    } else {
      return people;
    }
  }

}
