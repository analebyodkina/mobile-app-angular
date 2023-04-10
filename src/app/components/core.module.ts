import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressComponent
  ]
})
export class CoreModule { }
