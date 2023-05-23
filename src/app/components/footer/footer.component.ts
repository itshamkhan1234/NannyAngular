import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantService } from 'src/app/service/constant.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  isActiveTab: boolean = false;

  constructor(private router: Router, private constantService: ConstantService) { }

  ngOnInit(): void {
  }

  openIot() {
    this.router.navigate(['./iot'])
    if (this.constantService.isBrowser()) {
      window.scrollTo(0, 0);
    }
    this.openLink();
  }
  openHome() {
    this.router.navigate(['./home'])
    if (this.constantService.isBrowser()) {
      window.scrollTo(0, 0);
    }
    this.openLink();
  }
  theProcess() {
    this.router.navigate(['./home']);
    this.openLink();
    this.isActiveTab = true;
    setTimeout(() => {
      this.goToProcess();
    }, 2)
  }
  goToProcess() {
    this.constantService.theProcess.next(true)
  }

  verticals() {
    this.router.navigate(['./verticals'])
    this.openLink();
    this.isActiveTab = true;
    setTimeout(() => {
      this.goToVerticals();
    }, 2);
  }
  goToVerticals() {
    this.constantService.verticals.next(true);
  }

  scrollHome() {
    if (this.constantService.isBrowser()) {
      window.scrollTo(0, 0);
    }
    this.openLink();
  }

  currentYearLong(): number {
    return new Date().getFullYear();
  }

  openLink() {
    let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
    }
  }

}