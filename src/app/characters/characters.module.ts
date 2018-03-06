import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import {CharacterService} from './shared/character.service';
import {HttpClientModule} from '@angular/common/http';
import {CharactersRoutingModule} from './characters-routing.module';
import {StarMaterialModule} from '../star-material/star-material.module';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, CharactersRoutingModule, StarMaterialModule
  ],
  exports: [
    CharacterListComponent
  ],
  providers: [CharacterService],
  declarations: [CharacterListComponent]
})
export class CharactersModule { }
