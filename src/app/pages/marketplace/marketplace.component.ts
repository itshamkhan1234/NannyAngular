import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  selector: 'marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})

export class MarketplaceComponent implements OnInit {

  bsModalRef?: BsModalRef;
  countryCode = "+61";
  phoneNumber: string = "";
  number: string = "";
  lat = -37.811262;
  lng = 144.963151;
  selectedLat: number = -37.811262;
  selectedLng: number = 144.963151;
  zoom: number = 19;
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  errorMessage: string = '';
  aFormGroup!: FormGroup;
  siteKey: string = '6LfBQU0bAAAAAChn1SYjhWzuN1jqqH0S4KcVCw5X'; // web
  // new --> 6LcCJk8bAAAAAKl68eJ4oDE5vZfYMTX91mjIZI0k
  reCapchaError: string = '';
  ipAddress = '';
  pageUrl = '';
  testConfig = slickConfig;
  clientReview: any = [];
  clientTitle: string = "Attalla Digital team did an amazing job!";
  clientReviewData: string = 'It has been a pleasure working with Attalla Digital especially Omji Pandey, Harman Preet and Janardhan Singla. Their team is very receptive to our ideas and extremely knowledgeable about the current trends. After our first pleasant experience, we valued each suggestion from Attalla Digital whether it was regarding upgrading software or adding functionality in our website. Their decisions have really helped in making our customer experience better which directly impacts our bottom line. We were looking for an agency that had expertise in creating mobile &amp; web solutions and at the same time would help us in marketing our services and in Attalla Digital, we have found what we were looking for. I highly recommend the Attalla Digital team.';
  errorName: string = '';
  errorEmail: string = '';
  errorPhone: string = '';
  erroeCapcha: string = '';
  isActive = false;
  esyscroll: boolean = true;

  //  teaser_1 :any;
  constructor(private modalService: BsModalService, private titleService: Title, private metaService: Meta,
    private router: Router, private service: CommonService, private http: HttpClient,
    private formBuilder: FormBuilder) {
      this.metaService.updateTag(
        {
         name: 'description', 
         content: 'Attalla Digital is a leading Marketplace Development Company. We are one of the most well-known providers of online marketplace development services.Contact US' 
        }
      );
     }

  h1color = 'red';
  currentHeading = "Let's Get In Touch";
  ngOnInit(): void {
    this.titleService.setTitle('Best Marketplace Development Company | Attalla Digital');
    this.getIPAddress();
    this.getUrl();
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    this.clientReview = [
      {
        id: 1,
        photo: "3.jpg",
        color: '#DED4B7',
        name: "C. Stephan Brown",
        designation: "CEO csbtechemporium bahamas",
        title: "Attalla Digital team did an amazing job!",
        about: "It has been a pleasure working with Attalla Digital especially Omji Pandey, Harman Preet and Janardhan Singla. Their team is very receptive to our ideas and extremely knowledgeable about the current trends. After our first pleasant experience, we valued each suggestion from Attalla Digital whether it was regarding upgrading software or adding functionality in our website. Their decisions have really helped in making our customer experience better which directly impacts our bottom line. We were looking for an agency that had expertise in creating mobile &amp; web solutions and at the same time would help us in marketing our services and in Attalla Digital, we have found what we were looking for. I highly recommend the Attalla Digital team."
      },
      {
        id: 2,
        photo: "4.jpg",
        color: '',
        name: "Andrew Cohen",
        designation: "Co-founder and Ceo of Prep app",
        title: "Attalla Digital team did an amazing job!",
        about: "Attalla Digital team did an amazing job while working to create our website from scratch. Their team was timely in completing the task at the same time, they were really patient listening to my feedback during the development stage. As a customer, I was able to communicate with all the employees in the process responsible for working on my website. Eventually, they delivered a website that we are in love with, absolutely cost-effective, efficient and that has the features that we could not believe would come in our budget. They were very supportive and professional throughout the complete development. I highly recommend Attalla Digital for all your web based requirements."
      },
      {
        id: 3,
        photo: "5.png",
        color: '',
        name: "Reginald Morgan",
        designation: "Founder of Viral and Whizzride apps",
        title: "It was a great experience!",
        about: "It has been a very pleasant experience to work with the team of Attalla Digital. They are proactive in their approach and they helped me in taking the right decisions quickly. Whenever I felt confused over an idea, they explained and convinced me with logic helping the process to execution far beyond than I could imagine. The team knows how to communicate professionally with a client. They do not only look to finish execution but think from both the perspectives, from clients as well as from the end user. From sketching a plan to the delivery of the project, you can expect an excellent experience."
      }
    ]
  }

  changeColor() {
    this.isActive = !this.isActive;
  }


  dispalyResult(client: any) {
    this.clientTitle = client.title;
    this.clientReviewData = client.about;
    client.color = "#DED4B7";
    this.clientReview.map((r: any) => {
      if (r.id != client.id) {
        r.color = '';
      }
    })
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

  openLetTalksComponent() {
    const config = {
      class: 'modal-dialog-centered modal-md border-0'
    }
    this.bsModalRef = this.modalService.show(LetTalksComponent, config);
    this.bsModalRef.content.closeBtnName = 'Close';
  }


  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e: any) {
    let sc = e.target.scrollingElement.scrollTop;
    console.log();
    if (sc >= 5450 && this.esyscroll) {
      this.startCountdown();
      this.esyscroll = false
    }
  }
  // openModalTest(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
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

  // sliders//////

  slideConfig = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ]
  };


  // counter

  counter: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  counter4: number = 0;
  startCountdown() {
    const interval = setInterval(() => {
      this.counter++;
      if (this.counter >= 10) {
        clearInterval(interval);
      }
    }, 200);
    const interval2 = setInterval(() => {
      this.counter2++;
      if (this.counter2 >= 2300) {
        clearInterval(interval2);
      }
    }, 0);
    const interval3 = setInterval(() => {
      this.counter3++;
      if (this.counter3 >= 550) {
        clearInterval(interval3);
      }
    }, 10);
    const interval4 = setInterval(() => {
      this.counter4++;
      if (this.counter4 >= 50) {
        clearInterval(interval4);
      }
    }, 200);

  }



}
