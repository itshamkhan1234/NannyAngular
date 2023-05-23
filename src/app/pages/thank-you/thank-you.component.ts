import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit,OnDestroy {

  ipAddress = '';
  pageUrl = '';
  script: any;
  constructor(private titleService: Title, private router: Router,
    private http: HttpClient, private service: CommonService, private _renderer2: Renderer2, @Inject(DOCUMENT) private _document:Document) { }

  ngOnInit(): void {
    this.titleService.setTitle('Attalla Digital | Thank you');
    this.getIPAddress();
    this.getUrl();
    this.addScriptTag();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  homePage() {
    this.router.navigate(['./home']);
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
    this.service.dataSubmit(request, 'logs').subscribe((result) => {
      console.log("1", result);
    })
  }

  addScriptTag() {
    this.script = this._renderer2.createElement('script');
    this.script.text = `gtag('event', 'conversion', {'send_to': 'AW-778389881/qSaXCNLa550DEPmSlfMC'})`;
    this._renderer2.appendChild(this._document.head, this.script);
  }
  ngOnDestroy() {
    this._renderer2.removeChild(this._document.head, this.script)
  }

}
