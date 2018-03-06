import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {StarMaterialModule} from './star-material/star-material.module';
import {CharactersModule} from './characters/characters.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, StarMaterialModule, CharactersModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
