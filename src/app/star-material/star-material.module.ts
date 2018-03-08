import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule, MatSliderModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule, MatSidenavModule, MatProgressBarModule, MatListModule, MatIconModule, MatMenuModule, MatButtonModule, MatInputModule,
    MatSelectModule, MatCardModule, MatFormFieldModule, MatSliderModule, MatExpansionModule, MatSnackBarModule, LayoutModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class StarMaterialModule {
}
