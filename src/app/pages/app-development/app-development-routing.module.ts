import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDevelopmentComponent } from './app-development.component';

const routes: Routes = [
  {
    path: '',
    component: AppDevelopmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDevelopmentRoutingModule { }
