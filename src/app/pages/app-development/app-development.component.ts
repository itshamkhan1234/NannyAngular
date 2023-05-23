import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/service/common.service';
import { LetTalksComponent } from '../let-talks/let-talks.component';

@Component({
  selector: 'app-app-development',
  templateUrl: './app-development.component.html',
  styleUrls: ['./app-development.component.scss']
})
export class AppDevelopmentComponent implements OnInit {


  currentHeading = "Build an app for your businesses!";
  ipAddress = '';
  pageUrl = '';

  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService, private titleService: Title, private http: HttpClient, private metaService: Meta,
    private formBuilder: FormBuilder, private service: CommonService, private router: Router) { 
      this.metaService.updateTag(
        {
         name: 'description', 
         content: 'Attalla Digital is the Best Android and iOS App Development Company in Australia. Find out how we can help with your project.' 
        }
      );
    }

  ngOnInit(): void {
    this.titleService.setTitle('Best Mobile Apps Development Company | Attalla Digital');
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
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      }
    ]
  };

  slideConfig5 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  };


}
