import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDevelopmentRoutingModule } from './app-development-routing.module';
import { AppDevelopmentComponent } from './app-development.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AgmCoreModule } from '@agm/core';
import { RatingModule } from 'ngx-bootstrap/rating';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { CommonModuleModule } from '../common-module/common-module.module';
import { MarketplaceModule } from '../marketplace/marketplace.module';
import { ContactUsModule } from '../contact-us/contact-us.module';



@NgModule({
  declarations: [AppDevelopmentComponent],
  imports: [
    CommonModule,
    AppDevelopmentRoutingModule,
    SlickCarouselModule,
    CommonModule,
    Ng2TelInputModule,
    NgxCaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContactUsModule,
    NgxCaptchaModule,
    PortfolioModule,
    CommonModuleModule,
    MarketplaceModule,
    RatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL6NF6vEGtB5W0hfDu2wet79sllR1HlWc',
      libraries: ['places', 'drawing', 'geometry']
    }),
  ]
})
export class AppDevelopmentModule { }
