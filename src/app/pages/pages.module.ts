import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ServicesComponent } from './services/services.component';
import { VerticalsComponent } from './verticals/verticals.component';
import { ProcessComponent } from './process/process.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WorkComponent } from './work/work.component';
import { IotComponent } from './iot/iot.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { JobsComponent } from './jobs/jobs.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { DirectorPageComponent } from './director-page/director-page.component';
import { GonannyComponent } from './gonanny/gonanny.component';

@NgModule({
  declarations: [
    PagesComponent,
    ServicesComponent,
    VerticalsComponent,
    ProcessComponent,
    AboutUsComponent,
    WorkComponent,
    IotComponent,
    TermsConditionComponent,
    PrivacyPolicyComponent,
    JobsComponent,
    ThankYouComponent,
    DirectorPageComponent,
    GonannyComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    Ng2TelInputModule,
    NgxCaptchaModule
  ]
})

export class PagesModule { }