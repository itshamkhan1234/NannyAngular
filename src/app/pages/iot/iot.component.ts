import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/service/common.service';
import { LetTalksComponent } from '../let-talks/let-talks.component';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.scss']
})
export class IotComponent implements OnInit {

  bsModalRef?: BsModalRef;
  ipAddress = '';
  pageUrl = '';

  constructor(private modalService: BsModalService,private titleService : Title, private metaService: Meta,
    private router : Router, private http: HttpClient, private service : CommonService) {
      this.metaService.updateTag(
        {
         name: 'description', 
         content: 'Attalla Digital is the Trusted Internet of Things (IoT) App Development Company and we are having expert IoT app developers. Get your free quote now.' 
        }
      );
     }

  ngOnInit(): void {
    this.titleService.setTitle('IoT Application Development Company | Attalla Digital');
    this.getIPAddress();
    this.getUrl();
  }

  getIPAddress() {
    this.http.get("https://api.ipify.org/?format=json").subscribe((res: any) => {
      this.ipAddress = res.ip;
      this.submitPageInfo();
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
    this.service.dataSubmit(request,'logs').subscribe((result) => {
      console.log("1", result);    
    }) 
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  openLetTalksComponent() {
    const config = {
      class: 'modal-dialog-centered modal-md border-0'
    }
    this.bsModalRef = this.modalService.show(LetTalksComponent, config);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
