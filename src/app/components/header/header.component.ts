import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LetTalksComponent } from 'src/app/pages/let-talks/let-talks.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bsModalRef?: BsModalRef;


  constructor(public router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  // Home Paeg
  homePage() {
    this.router.navigate(['./home']);
    this.closeHead();
  }

  // service page
  servicePage() {
    this.router.navigate(['./services']);
    this.closeHead();
  }
  // service page
  porfolio() {
    this.router.navigate(['./portfolio']);
    this.closeHead();
  }
  // vertical Page
  verticalsPage() {
    this.router.navigate(['/verticals']);
  }

  // marketplace Page 
  marketplacePage() {
    this.router.navigate(['/marketplace']);
    this.closeHead();
  }
  nftPage() {
    this.router.navigate(['./nft-marketplace-development']);
    this.closeHead();
  }
  // Contact Us Page
  contactUsPage() {
    this.router.navigate(['/contact-us']);
    this.closeHead();
  }
  openAppDevelopment() {
    this.router.navigate(['./app-development'])   
    this.closeHead();
  }
  openLetTalksComponent() {
    const config = {
      class: 'modal-dialog-centered modal-md lets-talks'
    }
    this.bsModalRef = this.modalService.show(LetTalksComponent, config);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.closeHead();
  }


  closeHead() {
    let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
    }
  }
}