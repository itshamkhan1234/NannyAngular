import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ContactAllComponent } from './contact-all/contact-all.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    ContactAllComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ModalModule.forRoot(),
    Ng2TelInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBy9ZG9Ml5sJNy1FChHYfX3eImFLMB2Zxk',
      libraries: ['places', 'drawing', 'geometry']
   }),
  ],
  exports:[
    ContactAllComponent
  ]
})
export class ContactUsModule { }
