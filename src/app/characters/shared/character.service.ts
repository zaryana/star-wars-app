import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import {Character, SWApiResponse} from './character.model';
import {Film} from './film.model';
import {Species} from './species.model';
import {Starships} from './starships.model';
import {NotifyService} from './notify.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CharacterService {

  private charactersUrl = 'https://swapi.co/api/people/';
  private filmsUrl = 'https://swapi.co/api/films/';
  private speciesUrl = 'https://swapi.co/api/species/';
  private starshipsUrl = 'https://swapi.co/api/starships/';

  private characters: Observable<Character[]>;
  private films: Observable<Film[]>;
  private species: Observable<Species[]>;
  public starships: Observable<Starships[]>;

  constructor(private httpClient: HttpClient, private notifyService: NotifyService) {
    this.characters = this.getDomainObjects(this.charactersUrl);
    this.films = this.getDomainObjects(this.filmsUrl);
    this.species = this.getDomainObjects(this.speciesUrl);
    this.starships = this.getDomainObjects(this.starshipsUrl);
  }

  /**
   * Gets characters
   *
   * @returns {Observable<Character[]>}
   */
  public getCharacters(): Observable<Character[]> {
    return this.characters;
  }

  /**
   * Get character by given ID
   *
   * @param {number} id
   * @returns {Observable<Character>}
   */
  public getCharacter(id: number): Observable<Character> {
    return this.characters.map((characters: Character[]) => {
      return characters.find((character: Character) => {
        const url = character.url.split('/');
        const currId = Number(url[url.length - 2]);
        return currId === id;
      });
    });
  }

  /**
   * gets species
   * @returns {Observable<Species[]>}
   */
  public getSpeciesOfCharacter(character: Character): Observable<Species[]> {
    return this.species.map((species: Species[]) => species.filter(
      (s: Species) => {
        return character.species.indexOf(s.url) > -1;
      }
    ));
  }

  /**
   * Get Movie entities for the given character
   *
   * @param {Character} character
   * @returns {Observable<Film[]>}
   */
  public getMoviesOfCharacter(character: Character): Observable<Film[]> {
    return this.films.map((films: Film[]) => films.filter(
      (f: Film) => {
        return character.films.indexOf(f.url) > -1;
      }
    ));
  }


  /**
   * Get Starship entities for the given character
   * @param {Character} character
   * @returns {Observable<Starships[]>}
   */
  public getShipsOfCharacter(character: Character): Observable<Starships[]> {
    return this.starships.map((ships: Starships[]) => ships.filter(
      (s: Starships) => {
        return character.starships.indexOf(s.url) > -1;
      }
    ));
  }

  /**
   * Get all films
   * @returns {Observable<Film[]>}
   */
  public getFilms(): Observable<Film[]> {
    return this.films;
  }

  /**
   * Get all species
   * @returns {Observable<Species[]>}
   */
  public getSpecies(): Observable<Species[]> {
    return this.species;
  }

  /**
   * Get all starships
   * @returns {Observable<Starships[]>}
   */
  public getStarships(): Observable<Starships[]> {
    return this.starships;
  }

  /**
   * Cache the HTTP response
   * @param {string} url
   * @returns {Observable<T[]>}
   */
  private getDomainObjects<T>(url: string): Observable<T[]> {
    return this.getApiPage<T>(url).publishReplay(1).refCount();
  }

  /**
   * Gets all pages by the given URL
   * @param {string} url
   * @returns {Observable<T[]>}
   */
  private getApiPage<T>(url: string): Observable<T[]> {
    return this.httpClient.get<SWApiResponse<T>>(url, httpOptions)
      .concatMap(pageResponse => {
        if (pageResponse.next) {
          return this.getApiPage(pageResponse.next).map(resultsToJoin => [...pageResponse.results, ...resultsToJoin]);
        } else {
          return Observable.of(pageResponse.results);
        }
      }).catch(this.handleError);
  }


  /**
   * Handles error messages
   * @param {Response} error
   * @returns {ErrorObservable}
   */
  private handleError(error: Response) {
    this.notifyService.warning('Ooops. Please try again later');
    const errMsg = 'Unable to complete the request';
    if (error.status !== 500) {
      const body = error.json() || '';
    }
    return Observable.throw(errMsg);
  }
}
