import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot([])
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
