import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-get-touch-form',
  templateUrl: './get-touch-form.component.html',
  styleUrls: ['./get-touch-form.component.scss']
})
export class GetTouchFormComponent implements OnInit {
  @Input() formHeading = ''

  ipAddress = '';
  pageUrl = '';

  countryCode = '+61';
  name: string = "";
  email: string = "";
  phoneNumber: string = "";
  message: string = "";
  errorName: string = "";
  errorEmail: string = "";
  errorPhone: string = "";
  errorMessage: string = "";
  errorCapcha: string = "";
  reCapchaError: string = "";
  submitData: boolean = false;
  aFormGroup!: FormGroup;
  resultData: any = [];
  // siteKey = '6LeWgB8cAAAAAK82_t_cAJceEvmIJxCoEnrRPcja';
  siteKey : string = '6LfBQU0bAAAAAChn1SYjhWzuN1jqqH0S4KcVCw5X'; // Live
  showNumber: boolean = false;
  constructor(private http: HttpClient,
    private formBuilder: FormBuilder, private service: CommonService, private router: Router, private meta: Meta) {
    this.cuntries();
  }

  // not allow space on first character
  public space(event: any) {
    if (event.target.selectionStart === 0 && event.code === 'Space') {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    // this.getLocation();
    this.getIPAddress();
    this.getUrl();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

  }


  // IP addres Api
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

    })
  }


  // tel input feild

  onCountryChange(e: any) {
    this.countryCode = e.dialCode;
    console.log(e);
  }
  hasError(e: any) { }
  getNumber(e: any) { }
  // telInputObject(obj) {

  //   obj.setCountry('us');
  // }

  // Only Integer Numbers for mobile
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  telInputObject(obj: any) {
    this.countryCode = this.countryCode ? this.countryCode : obj.s.dialCode;
    if (this.countryCode) {
      this.countryCode = this.countryCode.substring(1)
      let itemMatched:any = [];
      obj.p.forEach((item: any) => {
        if (item.dialCode == this.countryCode) {
          itemMatched.push(item);
          return;
        }
      });
      if (itemMatched && itemMatched.length > 0) {
        obj.setCountry(itemMatched[0].iso2);
      } else {
        obj.setCountry('au');
        this.countryCode = "+61";
        // this.contactDetailForm.controls['country_code'].setValue(this.countryCode);
      }
    }
  }

  lat: any;
  lng: any;
  getLocation() {
    // this.service.getlocation('https://api.ipregistry.co/?key=tryout&_=1637216518234').subscribe((res: any) => {
    //   this.countryCode = res.location.country.calling_code
    //   this.showNumber = true;
    // })
    // getlocation
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log("location=>", pos);
      this.lng = +pos.coords.longitude;
      this.lat = +pos.coords.latitude;
      this.GetCountryCode();
      // alert(this.countryShortName)
    }, err => {
      this.showNumber = true;
    });
  }

  GetCountryCode() {

    let geocoder = new google.maps.Geocoder();
    let latlng = { lat: this.lat, lng: this.lng };
    let that = this;
    geocoder.geocode({ location: latlng }, function (results) {
      if (results[0]) {
        that.countryShortName = that.getCountry(results[0]);
        // alert(that.countryShortName)
        let CountryCode = that.resultData.filter((c:any) => c.code == that.countryShortName)[0]['dial_code'];
        console.log(CountryCode)
        // alert(CountryCode);
        that.countryCode = CountryCode;
        that.showNumber = true;

        // let CountryCode = that.service.getData().subscribe((res) => {
        //   this.result = res;
        // }).filter(c => c.code == that.countryShortName)[0]['dial_code'];
        // console.log(CountryCode)
        // that.countryCode = CountryCode;
        // that.showNumber = true;
      }
    });
  }

  cuntries() {
    this.service.getData().subscribe(res => {
      this.resultData = res;

      this.getLocation();
      this.GetCountryCode();
    })
  }


  countryShortName: any;
  getCountry(results: any) {
    for (var i = 0; i < results.address_components.length; i++) {
      // var shortname = results[0].address_components[i].short_name;
      var short_name = results.address_components[i].short_name;
      var type = results.address_components[i].types;
      if (type.indexOf("country") != -1) {
        if (short_name) {
          return short_name;
        }
      }
    }
  }

  // capcha

  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

  submitDetails() {
    if (!this.name) {
      this.errorName = "Please enter name";
      return;
    }
    if (!this.email) {
      this.errorEmail = "Please enter email";
      return;
    }

    let emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailvalid.test(String(this.email).toLowerCase())) {
    } else {
      this.errorEmail = "Please enter correct email number";
      return;
    }


    if (!this.phoneNumber) {
      this.errorPhone = "Please enter phone number";
      return;
    }
    if (this.phoneNumber.length < 7) {
      this.errorPhone = "Please enter valid phone number";
      return;
    }
    let isnum = /^\d+$/.test(this.phoneNumber);
    if (isnum) {
    } else {
      this.errorPhone = "Please enter correct phone number";
      return;
    }
    if (!this.aFormGroup.value.recaptcha) {
      this.errorCapcha = "Captcha required";
      return;
    }
    if (!this.name && !this.email && !this.phoneNumber && !this.aFormGroup.value.recaptcha) {
      this.errorMessage = "Please enter all fields";
      this.reCapchaError = ""
    }
    this.submitData = true
    if (this.name && this.email && this.phoneNumber && this.aFormGroup.value.recaptcha) {
      let request = {
        name: this.name,
        email: this.email,
        country_code: this.countryCode,
        phone_number: this.phoneNumber,
        message: this.message,
      }
      this.service.dataSubmit(request, 'getInTouch').subscribe((result) => {
        this.submitData = false
        this.router.navigate(['thank-you']);
      })
    }
  }




}
