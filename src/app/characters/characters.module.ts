import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import {CharacterService} from './shared/character.service';
import {HttpClientModule} from '@angular/common/http';
import {CharactersRoutingModule} from './characters-routing.module';
import {StarMaterialModule} from '../star-material/star-material.module';
import { CharacterSearchComponent } from './character-search/character-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FilmsPipe } from './shared/films.pipe';
import { SpeciesPipe } from './shared/species.pipe';
import { BirthYearPipe } from './shared/birth-year.pipe';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  imports: [
    CommonModule, CharactersRoutingModule, StarMaterialModule, HttpClientModule, ReactiveFormsModule
  ],
  exports: [
    CharacterListComponent, CharacterSearchComponent
  ],
  providers: [CharacterService],
  declarations: [CharacterListComponent, CharacterSearchComponent, FilmsPipe, SpeciesPipe, BirthYearPipe, CharacterDetailsComponent]
})
export class CharactersModule { }
