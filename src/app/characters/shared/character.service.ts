import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import {Character} from './character.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CharacterService {

  private charactersUrl = 'https://swapi.co/api/people';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * gets characters
   * @returns {Observable<Character[]>}
   */
  public getCharacters(): Observable<Character[]> {
    return this.httpClient.get(this.charactersUrl).pipe(
      map(
        (res: any) => <Character[]>res.results),
      catchError(this.handleError)
    );
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
