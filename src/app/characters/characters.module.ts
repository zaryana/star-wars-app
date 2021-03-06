import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterService} from './shared/character.service';
import {HttpClientModule} from '@angular/common/http';
import {CharactersRoutingModule} from './characters-routing.module';
import {StarMaterialModule} from '../star-material/star-material.module';
import {CharacterSearchComponent} from './character-search/character-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FilmsPipe} from './shared/films.pipe';
import {SpeciesPipe} from './shared/species.pipe';
import {BirthYearPipe} from './shared/birth-year.pipe';
import {CharacterDetailsComponent} from './character-details/character-details.component';
import {NotifyService} from './shared/notify.service';
import { BattleOfYavinPipe } from './shared/battle-of-yavin.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, CharactersRoutingModule, StarMaterialModule, HttpClientModule, ReactiveFormsModule,
    BrowserAnimationsModule, FlexLayoutModule
  ],
  exports: [
    CharacterListComponent, CharacterSearchComponent, CharacterDetailsComponent
  ],
  providers: [CharacterService, NotifyService],
  declarations: [CharacterListComponent, CharacterSearchComponent, FilmsPipe, SpeciesPipe, BirthYearPipe, CharacterDetailsComponent,
    BattleOfYavinPipe]
})
export class CharactersModule {
}
