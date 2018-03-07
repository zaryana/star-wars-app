import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import {StarMaterialModule} from '../../star-material/star-material.module';
import {CharacterService} from '../shared/character.service';
import {HttpClientModule} from '@angular/common/http';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarMaterialModule, HttpClientModule],
      declarations: [ CharacterListComponent ],
      providers: [ CharacterService ]
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
