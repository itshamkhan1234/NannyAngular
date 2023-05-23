import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceComponent } from './marketplace.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgmCoreModule } from '@agm/core';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModuleModule } from '../common-module/common-module.module';
import { GetTouchFormComponent } from './get-touch-form/get-touch-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { PortfolioModule } from '../portfolio/portfolio.module';


@NgModule({
  declarations: [
    MarketplaceComponent, GetTouchFormComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    Ng2TelInputModule,
    NgxCaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContactUsModule,
    SlickCarouselModule,
    NgxCaptchaModule,
    PortfolioModule,
    CommonModuleModule,    
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBy9ZG9Ml5sJNy1FChHYfX3eImFLMB2Zxk',
      libraries: ['places', 'drawing', 'geometry']
    }),
  ],
  exports: [
    GetTouchFormComponent
  ]
})
export class MarketplaceModule { }
