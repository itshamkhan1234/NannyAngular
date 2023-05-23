import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  ipAddress = '';
  pageUrl = '';

  constructor(private router : Router, private titleService: Title,
    private http: HttpClient, private service : CommonService,) { }

  ngOnInit(): void {
    this.titleService.setTitle('Attalla Digital | Services');
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

}
