import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModuleRoutingModule } from './common-module-routing.module';
import { TopBrandComponent } from './top-brand/top-brand.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TopBrandComponent, TechStackComponent, TestimonialComponent],
  imports: [
    CommonModule,
    CommonModuleRoutingModule,
    SlickCarouselModule,
    RatingModule.forRoot(),
    FormsModule,
  ],
  exports: [
    TopBrandComponent,
    TechStackComponent,
    TestimonialComponent
  ]
})
export class CommonModuleModule { }
