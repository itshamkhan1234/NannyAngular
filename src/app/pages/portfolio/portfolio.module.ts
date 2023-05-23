import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioAllComponent } from './portfolio-all/portfolio-all.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [PortfolioComponent, PortfolioAllComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  exports: [PortfolioAllComponent]

})
export class PortfolioModule { }
