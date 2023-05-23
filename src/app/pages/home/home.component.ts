import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Typewriter from 't-writer.js';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/service/common.service';
import { slickConfig } from 'src/app/service/constants';
import { LetTalksComponent } from '../let-talks/let-talks.component';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  bsModalRef?: BsModalRef;
  countryCode = "+61";
  phoneNumber: string = "";
  number: string = "";
  lat = -37.811262;
  lng = 144.963151;
  selectedLat: number = -37.811262;
  selectedLng: number = 144.963151;
  zoom: number = 19;
  ipAddress = '';
  pageUrl = '';
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  errorMessage: string = '';
  errorName: string = '';
  errorEmail: string = '';
  errorPhone: string = '';
  erroeCapcha: string = '';
  aFormGroup!: FormGroup;
  siteKey: string = '6LfBQU0bAAAAAChn1SYjhWzuN1jqqH0S4KcVCw5X'; // web
  reCapchaError: string = '';
  testConfig = slickConfig;
  serviceDetails: any = [];
  imagesLogo: any = [];
  imagesLogo1: any = [];

  constructor(private router: Router, private modalService: BsModalService, private metaService: Meta,
    private titleService: Title, private http: HttpClient,
    private service: CommonService, private formBuilder: FormBuilder) {
      this.metaService.updateTag(
        {
          name: 'description',
          content: 'Attalla Digital is a web and mobile app development company building reliable solutions for businesses and startups. Contact us and get free quote now!'
        }
      );
     }

  ngOnInit() {
    this.titleService.setTitle('Web and Mobile App Development Company | Attalla Digital');
    this.getIPAddress();
    this.getUrl();
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    this.serviceDetails = [
      {
        photo: "mobile_app.svg",
        title: "Mobile Apps Development",
        details: "We provide end to end mobile app development solutions and help you with design, development, deployment and consistent support to make incremental improvement in the product by resolving bugs & making enhancements."
      },
      {
        photo: "website_development.svg",
        title: "Websites Development",
        details: "We build beautiful looking websites with aesthetic appeal, responsive to screen of the user’s choice, laser fast speed, SEO friendly, easily scalable and adaptive to the business requirements."
      },
      {
        photo: "digital_marketing.svg",
        title: "Digital Marketing",
        details: "We build beautiful looking websites with aesthetic appeal, responsive to screen of the user’s choice, laser fast speed, SEO friendly, easily scalable and adaptive to the business requirements."
      },
      {
        photo: "brand_identity.svg",
        title: "Brand Identity",
        details: "Your brand is the mark of promise, reliability and credibility to your customers. Our team helps you bring out the true identity of your brand and strategically designs the graphic product."
      },
      {
        photo: "graphic_design.svg",
        title: "Graphics Design",
        details: "It is the era of visual and virtual communication. Well researched graphics and their placement, We infuse creativity and effectiveness in our designs backed by extensive research and experience."
      },
      {
        photo: "cloud_service.svg",
        title: "Cloud Services",
        details: "Cloud computing has created a technology revolution for small and medium enterprises, giving access to a variety of capabilities that usually only big corporations could afford. Small corporations can get into."
      },
      {
        photo: "promotion_marketing.svg",
        title: "Promotion & Marketing Services",
        details: "Each year, 90% of new products fail to succeed. Do you know why? Because they either don’t invest in marketing and if they do, their marketing strategies go haywire failing to gain mindshare of the consumer."
      },
      {
        photo: "content_management.svg",
        title: "Content Management Strategy",
        details: "Content is the King. Get the content that engages your target audience and retain your prospects on your website for longer duration. Present your product like a story that everyone wants to read. Get in touch with."
      },
      {
        photo: "analytics_dashboard.svg",
        title: "Analytics Dashboard",
        details: "Do you know who you should target for your products and services? Are you targeting the right demographics? Are you targeting the right age group? At Attalla Digital, we give you all the answers about."
      },
    ],
      this.imagesLogo = [
        /*
        {
           photo: "pharmasave.png"
         },
        {
          photo: "traxi.png"
        },
       */
        {
          photo: "stockware.webp"
        },
        {
          photo: "streamwise.webp"
        },
        {
          photo: "pocket_studio.webp"
        },
        {
          photo: "my_eve.webp"
        },
        {
          photo: "way.webp"
        },
        {
          photo: "iotech.webp"
        }

      ]

    // type writer/////////////////////////
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 150,
      deleteSpeed: 150,
      typeColor: '#8d8c8c',
      cursorColor: 'grey'
    })
    writer
      .strings(
        2000,
        "Website developers",
        "Mobile app developers",
        "UI Designs",
        "Marketplaces",
        "Blockchain",
        "Digital Marketing Guru"
      )
      .clear()
      .start()
  }

  getIPAddress() {
    this.http.get("https://api.ipify.org/?format=json").subscribe((res: any) => {
      this.ipAddress = res.ip;
      this.submitPageInfo();
      console.log("1", this.ipAddress);
    });
  }

  getUrl() {
    this.pageUrl = window.location.href
    console.log("0", this.pageUrl);

  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  // IOT Page
  iotPage() {
    this.router.navigate(['/iot']);
  }

  // marketplace Page 
  marketplacePage() {
    this.router.navigate(['/marketplace']);
  }

  // Get number
  getNumber(event: any) {
    //  this.phoneNumber = this.countryCode + this.number; //phone number with countrycode
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
  openLetTalksComponent() {
    const config = {
      class: 'modal-dialog-centered modal-md border-0'
    }
    this.bsModalRef = this.modalService.show(LetTalksComponent, config);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  // openModalTest(template: TemplateRef<any>) {
  // 	this.modalRef = this.modalService.show(template);
  // }

  subjectDetails(template: any) {
    if (!this.name) {
      this.errorName = "Please enter name"
    }
    if (!this.email) {
      this.errorEmail = "Please enter email"
    }
    if (!this.phoneNumber) {
      this.errorPhone = "Please enter phone number"
    }
    if (!this.aFormGroup.value.recaptcha) {
      this.erroeCapcha = "Captcha required"
    }
    if (!this.name && !this.email && !this.phoneNumber && !this.aFormGroup.value.recaptcha) {
      this.errorMessage = "Please enter all fields";
      this.reCapchaError = '';
    }
    if (this.name && this.email && this.phoneNumber && this.aFormGroup.value.recaptcha) {
      let request = {
        name: this.name,
        email: this.email,
        country_code: this.countryCode,
        phone_number: this.phoneNumber,
        subject: this.subject,
        message: this.message,
      }
      // this.openModalTest(template);
      setTimeout(() => {
        this.service.dataSubmit(request, 'getInTouch').subscribe((result) => {
          this.router.navigate(['thank-you']);
          this.closeModal();
        })
      }, 2000);
    }
  }

  closeModal() {
    this.modalService.hide();
  }

  submitPageInfo() {
    let request = {
      ip: this.ipAddress,
      page_url: this.pageUrl
    }
    this.service.dataSubmit(request, 'logs').subscribe((result) => {
    })
  }


  slideConfig = {
    'slidesToShow': 4,
    'slidesToScroll': 1,
    'dots': false,
    'arrows': true,
    'swipeToSlide': true,
    'infinite': true,
    'autoplay': true,
    'autoplaySpeed': 1000,
    'responsive': [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

}