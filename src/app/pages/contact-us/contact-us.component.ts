import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/service/common.service';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  countryCode = "+61";
  phoneNumber: string = "";
  number: string = "";
  lat = -37.811262;
  lng = 144.963151;
  selectedLat: number = -37.811262;
  selectedLng: number = 144.963151;
  zoom: number = 19;
  name: string = '';
  email : string = '';
  subject : string ='';
  message : string = '';
  errorMessage : string = '';
  errorName : string = '';
  errorEmail : string= '';
  errorPhone : string = '';
  erroeCapcha : string = '';
  aFormGroup!: FormGroup;
   siteKey : string = '6LfBQU0bAAAAAChn1SYjhWzuN1jqqH0S4KcVCw5X'; // Live

  reCapchaError : string ='';
  ipAddress = '';
  pageUrl = '';
  modalRef!: BsModalRef;

  constructor(private titleService : Title, private router : Router, 
    private http: HttpClient, private service : CommonService, private metaService: Meta,
    private formBuilder: FormBuilder, private modalService: BsModalService) {
      this.metaService.updateTag(
        {
         name: 'description', 
         content: 'Please fill out the contact form and tell us your needs like Mobile and Web development. Attalla Digital will get back to you soon.' 
        }
      );
     }

  ngOnInit(): void {
    this.titleService.setTitle('Attalla Digital | Contact Us');
    this.getIPAddress();
    this.getUrl();
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
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

  hasError(error: any) {
    console.log(error)
  }

  // Get Country
  onCountryChange(event: any) {
    this.countryCode = event.dialCode;
  }

  telInputObject(obj: any) {
    obj.setCountry('au');
  }

  // Get number
  getNumber(event: any) {
  //  this.phoneNumber = this.countryCode + this.number; //phone number with countrycode
  }

  openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}

  subjectDetails(template : any) {
    if(!this.name) {
      this.errorName = "Please enter name"
    }
    if(!this.email) {
      this.errorEmail = "Please enter email"
    }
    if(!this.phoneNumber) {
      this.errorPhone = "Please enter phone number"
    }
    if(!this.aFormGroup.value.recaptcha) {
      this.erroeCapcha = "Captcha required"
    }
    if(!this.name && !this.email && !this.phoneNumber && !this.aFormGroup.value.recaptcha) {
      this.errorMessage = "Please enter all fields";
      this.reCapchaError= '';
    }
    if(this.name && this.email && this.phoneNumber && this.aFormGroup.value.recaptcha) {
      let request = {
        name : this.name,
        email : this.email,
        country_code : this.countryCode,
        phone_number : this.phoneNumber,
        subject : this.subject,
        message : this.message,
      } 
      this.openModal(template);
			setTimeout(() => {
        this.service.dataSubmit(request,'getInTouch').subscribe((result) => {
          this.router.navigate(['thank-you']);        
          this.closeModal();
        }) 
			}, 2000);     
    }
  }

  closeModal() {
		this.modalService.hide();
	}
}
