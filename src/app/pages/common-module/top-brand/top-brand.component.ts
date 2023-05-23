import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-brand',
  templateUrl: './top-brand.component.html',
  styleUrls: ['./top-brand.component.scss']
})
export class TopBrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  slideConfig2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
