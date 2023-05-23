import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderSecondModule } from 'src/app/components/header-second/header-second.module';


@NgModule({
  declarations: [
    BlankComponent
  ],
  imports: [
    CommonModule,
    BlankRoutingModule,
    FooterModule,
    HeaderSecondModule
  ]
})
export class BlankModule { }
