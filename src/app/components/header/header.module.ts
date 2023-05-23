import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2TelInputModule } from 'ng2-tel-input';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    Ng2TelInputModule
  ],
  exports : [HeaderComponent]
})

export class HeaderModule { }