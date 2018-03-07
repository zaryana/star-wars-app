import {Pipe, PipeTransform} from '@angular/core';
import {Character} from './character.model';
import {Film} from './film.model';

@Pipe({
  name: 'films'
})
export class FilmsPipe implements PipeTransform {

  transform(people: Character[], films: Film[]): Character[] {
    if (!people) {
      return [];
    }
    if (films && films.length > 0) {
      const filmUris: string[] = films.map((f: Film) => f.url);
      return people.filter((c: Character) => c.films.some((filmUri: string) => filmUris.indexOf(filmUri) > -1));
    } else {
      return people;
    }
  }
}
