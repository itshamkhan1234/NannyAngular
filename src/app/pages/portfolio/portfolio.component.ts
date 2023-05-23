import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  ipAddress = '';
  pageUrl = '';
  constructor(private titleService: Title, private http: HttpClient, private service: CommonService, private metaService: Meta) {
    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Web & mobile Application Development Portfolio – Attalla Digital has delivered more than 150+ projects successfully to our prestigious clients globally.'
      }
    );
  }

  ngOnInit(): void {
    this.titleService.setTitle('Attalla Digital | Portfolio');
    this.getIPAddress();
    this.getUrl();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  // IP addres Api
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

}
