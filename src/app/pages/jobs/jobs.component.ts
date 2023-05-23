import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  ipAddress = '';
  pageUrl = '';

  constructor(private titleService : Title, private router : Router,
    private http: HttpClient, private service : CommonService,) { }

  ngOnInit(): void {
    this.titleService.setTitle('Attalla Digital | Jobs');
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
