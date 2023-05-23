import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'nft-marketplace-development',
        loadChildren: () => import('./../../pages/nft-page/nft-page.module').then(m => m.NftPageModule)
      },
      {
        path: '**',
        loadChildren: () => import('./../../pages/home/home.module').then((m) => m.HomeModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankRoutingModule { }
