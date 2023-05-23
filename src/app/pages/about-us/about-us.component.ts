import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  ipAddress = '';
  pageUrl = '';

  constructor(private titleService : Title, private router : Router, private metaService: Meta,
    private http: HttpClient, private service : CommonService,) { 
      this.metaService.updateTag(
        {
         name: 'description', 
         content: 'About Attalla Digital is a Best web and mobile app development company and we have a top-notch developers team.' 
        }
      );
    }

  ngOnInit(): void {
    this.titleService.setTitle('Attalla Digital | About Us');
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
