import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyComponent } from './study.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: StudyComponent },  
];

@NgModule({
  declarations: [
    StudyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class StudyModule { }
