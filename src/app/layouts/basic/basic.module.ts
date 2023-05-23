import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    HeaderModule,
    FooterModule
  ]
})

export class BasicModule { }