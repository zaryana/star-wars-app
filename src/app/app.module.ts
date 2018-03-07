import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {StarMaterialModule} from './star-material/star-material.module';
import {CharactersModule} from './characters/characters.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FilmsPipe } from './characters/shared/films.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, StarMaterialModule, CharactersModule, RouterModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
