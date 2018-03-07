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

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CharacterService {

  private charactersUrl = 'https://swapi.co/api/people';
  private filmsUrl = 'https://swapi.co/api/films';
  private speciesUrl = 'https://swapi.co/api/species';

  private characters: Observable<Character[]>;
  private films: Observable<Film[]>;
  private species: Observable<Species[]>;

  constructor(private httpClient: HttpClient) {
    this.characters = this.getDomainObjects(this.charactersUrl);
    this.films = this.getDomainObjects(this.filmsUrl);
    this.species = this.getDomainObjects(this.speciesUrl);
  }

  /**
   * gets characters
   * @returns {Observable<Character[]>}
   */
  public getCharacters(): Observable<Character[]> {
    return this.characters;
  }

  /**
   * gets films
   * @returns {Observable<Film[]>}
   */
  public getFilms(): Observable<Film[]> {
    return this.films;
  }

  /**
   * gets species
   * @returns {Observable<Species[]>}
   */
  public getSpecies(): Observable<Species[]> {
    return this.species;
  }

  /**
   * caching
   * @param {string} url
   * @returns {Observable<T[]>}
   */
  private getDomainObjects<T>(url: string): Observable<T[]> {
    return this.getApiPage<T>(url).publishReplay(1).refCount();
  }

  /**
   * gets all pages
   * @param {string} url
   * @returns {Observable<T[]>}
   */
  private getApiPage<T>(url: string): Observable<T[]> {
    return this.httpClient.get<SWApiResponse<T>>(url)
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
    const errMsg = 'Unable to complete the request';
    if (error.status !== 500) {
      const body = error.json() || '';
    }
    return Observable.throw(errMsg);
  }
}
