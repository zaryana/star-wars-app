import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterDetailsComponent} from './character-details.component';
import {StarMaterialModule} from '../../star-material/star-material.module';
import {RouterTestingModule} from '@angular/router/testing';
import {CharacterService} from '../shared/character.service';
import {HttpClientModule} from '@angular/common/http';
import {NotifyService} from '../shared/notify.service';

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarMaterialModule, HttpClientModule, RouterTestingModule],
      declarations: [ CharacterDetailsComponent ],
      providers: [CharacterService, NotifyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
