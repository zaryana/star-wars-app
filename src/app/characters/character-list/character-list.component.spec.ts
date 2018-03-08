import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterListComponent} from './character-list.component';
import {StarMaterialModule} from '../../star-material/star-material.module';
import {CharacterService} from '../shared/character.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BirthYearPipe} from '../shared/birth-year.pipe';
import {FilmsPipe} from '../shared/films.pipe';
import {SpeciesPipe} from '../shared/species.pipe';
import {NotifyService} from '../shared/notify.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarMaterialModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [ CharacterListComponent, BirthYearPipe, FilmsPipe, SpeciesPipe ],
      providers: [ CharacterService, NotifyService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
