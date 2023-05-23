import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NftPageRoutingModule } from './nft-page-routing.module';
import { NftPageComponent } from './nft-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { CommonModuleModule } from '../common-module/common-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarketplaceModule } from '../marketplace/marketplace.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    NftPageComponent
  ],
  imports: [
    CommonModule,
    NftPageRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    ContactUsModule,
    CommonModuleModule,
    FormsModule,
    ReactiveFormsModule,
    MarketplaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBy9ZG9Ml5sJNy1FChHYfX3eImFLMB2Zxk',
      libraries: ['places', 'drawing', 'geometry']
   }),
  ]
})
export class NftPageModule { }
