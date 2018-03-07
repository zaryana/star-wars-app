import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import {Character, SWApiResponse} from './character.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CharacterService {

  private charactersUrl = 'https://swapi.co/api/people';
  private cachedChars: Observable<Character[]>;

  constructor(private httpClient: HttpClient) {
    this.cachedChars = this.getCharactersPage(this.charactersUrl).publishReplay(1).refCount();
  }

  /**
   * gets characters
   * @returns {Observable<Character[]>}
   */
  public getCharacters(): Observable<Character[]> {
    return this.cachedChars;
  }

  private getCharactersPage(url: string): Observable<Character[]> {
    return this.httpClient.get<SWApiResponse<Character>>(url)
      .concatMap(data => {
        if (data.next) {
          return this.getCharactersPage(data.next).map(resultsToJoin => [...data.results, ...resultsToJoin]);
        } else {
          return Observable.of(data.results);
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
