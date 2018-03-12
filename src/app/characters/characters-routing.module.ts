import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterDetailsComponent} from './character-details/character-details.component';

const routes: Routes = [
  {path: '', component: CharacterListComponent,  data: { state: 'home' }},
  {path: 'characters/:id', component: CharacterDetailsComponent, data: { state: 'details' }},
  {path: '**', redirectTo: ''}
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
