import {async, TestBed} from '@angular/core/testing';

import {CharacterService} from './character.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Character} from './character.model';
import {SWAPI_1PAGE_MOCK, SWAPI_2PAGES_MOCK1, SWAPI_2PAGES_MOCK2} from './characters.mock';
import {NotifyService} from './notify.service';
import {StarMaterialModule} from '../../star-material/star-material.module';

describe('Character Service', () => {

  let characterService: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StarMaterialModule],
      providers: [CharacterService, NotifyService]
    });

    characterService = TestBed.get(CharacterService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should successfully gets characters', async(() => {
    const swApiPageMock = SWAPI_1PAGE_MOCK;
    characterService.getCharacters().subscribe(charactersList => expect(charactersList).toEqual(swApiPageMock.results));

    const characterRequest = httpMock.expectOne('https://swapi.co/api/people');

    characterRequest.flush(swApiPageMock);
  }));


  it('should successfully gets characters from multiple pages', async(() => {
    const swApiPageMock1 = SWAPI_2PAGES_MOCK1;
    const swApiPageMock2 = SWAPI_2PAGES_MOCK2;
    const expectedCharacters: Character[] = [...swApiPageMock1.results, ...swApiPageMock2.results];

    characterService.getCharacters().subscribe(charactersList => expect(charactersList).toEqual(expectedCharacters));

    let characterRequest = httpMock.expectOne('https://swapi.co/api/people');
    characterRequest.flush(swApiPageMock1);

    characterRequest = httpMock.expectOne(swApiPageMock1.next);
    characterRequest.flush(swApiPageMock2);
  }));

});
