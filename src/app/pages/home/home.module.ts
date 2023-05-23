import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { ContactUsModule } from '../contact-us/contact-us.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    ModalModule.forRoot(),
    Ng2TelInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    PortfolioModule,
    ContactUsModule,
    SlickCarouselModule,
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyBy9ZG9Ml5sJNy1FChHYfX3eImFLMB2Zxk',
       libraries: ['places', 'drawing', 'geometry']
    }),
  ]
})
export class HomeModule { }
