import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ReportsComponent } from './reports/reports.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProfileComponent },  
];

@NgModule({
  declarations: [
    ProfileComponent,
    ReportsComponent,
    QualitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProfileModule { }
