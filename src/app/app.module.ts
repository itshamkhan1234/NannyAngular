import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { BasicModule } from './layouts/basic/basic.module';
import { LetTalksModule } from './pages/let-talks/let-talks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HeaderModule,
		FooterModule,
		BasicModule,
    ModalModule.forRoot(),
    Ng2TelInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    LetTalksModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})

export class AppModule { }