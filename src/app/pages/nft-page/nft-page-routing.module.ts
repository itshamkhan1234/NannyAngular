import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftPageComponent } from './nft-page.component';

const routes: Routes = [
  {
    path:'',
    component: NftPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NftPageRoutingModule { }
