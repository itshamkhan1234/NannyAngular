import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSecondComponent } from './header-second.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    HeaderSecondComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    Ng2TelInputModule
  ],
  exports : [HeaderSecondComponent]
})
export class HeaderSecondModule { }
