import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetTalksRoutingModule } from './let-talks-routing.module';
import { LetTalksComponent } from './let-talks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [LetTalksComponent],
  imports: [
    CommonModule,
    LetTalksRoutingModule,
    Ng2TelInputModule,    
    NgxCaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [LetTalksComponent]
})
export class LetTalksModule { }
