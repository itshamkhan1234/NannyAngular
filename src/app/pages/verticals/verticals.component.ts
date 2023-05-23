import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-verticals',
  templateUrl: './verticals.component.html',
  styleUrls: ['./verticals.component.scss']
})
export class VerticalsComponent implements OnInit {

  ipAddress = '';
  pageUrl = '';

  constructor(private router : Router, private titleService: Title,
    private http: HttpClient, private service : CommonService,) { }

  ngOnInit() {
    this.titleService.setTitle('Attalla Digital | Verticals');
    this.getIPAddress();
    this.getUrl();
  }

  // IOT Page
  iotPage() {
    this.router.navigate(['/iot']);
  }

  // marketplace Page 
  marketplacePage() {
    this.router.navigate(['/marketplace']);
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
}