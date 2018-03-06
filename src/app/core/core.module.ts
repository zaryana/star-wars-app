import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {StarMaterialModule} from '../star-material/star-material.module';

@NgModule({
  imports: [
    CommonModule, StarMaterialModule
  ],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class CoreModule {
}
