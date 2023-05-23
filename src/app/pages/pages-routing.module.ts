import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectorPageComponent } from './director-page/director-page.component';
import { GonannyComponent } from './gonanny/gonanny.component';
import { IotComponent } from './iot/iot.component';
import { JobsComponent } from './jobs/jobs.component';
import { PagesComponent } from './pages.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProcessComponent } from './process/process.component';
import { ServicesComponent } from './services/services.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { VerticalsComponent } from './verticals/verticals.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'marketplace',
        loadChildren: () => import('./marketplace/marketplace.module').then((m) => m.MarketplaceModule),
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path: 'app-development',
        loadChildren: () => import('./app-development/app-development.module').then(m => m.AppDevelopmentModule)
      },
      // {
      //   path: 'nft-marketplace-development',
      //   loadChildren: () => import('./nft-page/nft-page.module').then(m => m.NftPageModule)
      // },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'verticals',
        component: VerticalsComponent,
      },
      {
        path: 'process',
        component: ProcessComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'work',
        component: WorkComponent,
      },
      {
        path: 'iot',
        component: IotComponent,
      },
      {
        path: 'terms-condition',
        component: TermsConditionComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
      {
        path: 'director-info',
        component: DirectorPageComponent,
      },
      {
        path: 'nannysoftware',
        component: GonannyComponent,
      },
      {
        path: 'thank-you',
        component: ThankYouComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }