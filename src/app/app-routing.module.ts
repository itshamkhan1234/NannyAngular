import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    loadChildren:() => import('./layouts/basic/basic.module').then((m)=> m.BasicModule)
  },
  {
    path : '',
    loadChildren:() => import('./layouts/blank/blank.module').then((m)=> m.BlankModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    preloadingStrategy: PreloadAllModules,
			initialNavigation: "enabled",
      scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }