import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CharacterListComponent} from './character-list/character-list.component';

const routes: Routes = [
  {path: 'list', component: CharacterListComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CharactersRoutingModule {
}
