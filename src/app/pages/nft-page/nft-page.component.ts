import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/service/common.service';
import { LetTalksComponent } from '../let-talks/let-talks.component';

@Component({
  selector: 'nft-page',
  templateUrl: './nft-page.component.html',
  styleUrls: ['./nft-page.component.scss']
})
export class NftPageComponent implements OnInit {

  lat = -37.811262;
  lng = 144.963151;
  selectedLat: number = -37.811262;
  selectedLng: number = 144.963151;
  zoom: number = 19;
  currentHeading = "Create an NFT marketplace like Opensea, <strong>Let's Start!</strong>";
  ipAddress = '';
  pageUrl = '';

  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService, private titleService: Title, private http: HttpClient, private metaService: Meta,
    private formBuilder: FormBuilder, private service: CommonService, private router: Router) {
    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Attalla Digital a NFT Development Company that helps you create and launch your own NFT marketplace. Get in touch today!'
      }
    );
  }

  ngOnInit(): void {
    this.titleService.setTitle('NFT Marketplace Development Company | Attalla Digital');
    this.getIPAddress();
    this.getUrl();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }


  openLetTalksComponent() {
    const config = {
      class: 'modal-dialog-centered modal-md border-0'
    }
    this.bsModalRef = this.modalService.show(LetTalksComponent, config);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  // // IP addres Api
  getIPAddress() {
    this.http.get("https://api.ipify.org/?format=json").subscribe((res: any) => {
      this.ipAddress = res.ip;
      this.submitPageInfo();
      console.log("1", this.ipAddress);
    });
  }

  getUrl() {
    this.pageUrl = window.location.href
  }

  submitPageInfo() {
    let request = {
      ip: this.ipAddress,
      page_url: this.pageUrl
    }
    this.service.dataSubmit(request, 'logs').subscribe((result) => {
      console.log("0", request);
    })
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollTo(0, 700);
  }


  // sliders//////////////////////////

  slideConfig4 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



}
