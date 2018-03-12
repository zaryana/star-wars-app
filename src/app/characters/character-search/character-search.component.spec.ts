import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterSearchComponent} from './character-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CharacterService} from '../shared/character.service';
import {BattleOfYavinPipe} from '../shared/battle-of-yavin.pipe';
import {StarMaterialModule} from '../../star-material/star-material.module';
import {HttpClientModule} from '@angular/common/http';
import {NotifyService} from '../shared/notify.service';

describe('CharacterSearchComponent', () => {
  let component: CharacterSearchComponent;
  let fixture: ComponentFixture<CharacterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarMaterialModule, HttpClientModule, ReactiveFormsModule],
      declarations: [ CharacterSearchComponent, BattleOfYavinPipe ],
      providers: [ CharacterService, NotifyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
