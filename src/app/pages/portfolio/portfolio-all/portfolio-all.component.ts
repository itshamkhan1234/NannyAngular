import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-all',
  templateUrl: './portfolio-all.component.html',
  styleUrls: ['./portfolio-all.component.scss']
})
export class PortfolioAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideConfig = {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'dots': false,
    'arrows': true,
    'swipeToSlide': true,
    'infinite': true,
    'autoplay': true,
    'speed': 800,
    'autoplaySpeed': 1000,
    'responsive': [
      {
        breakpoint: 768,
        settings: {
          'arrows': false
        }
      }
    ]
  };


}
