import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children:[
      {
        path:'',
        loadChildren: ()=> import('./../../pages/pages.module').then((m) => m.PagesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BasicRoutingModule { }