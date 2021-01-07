import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent implements OnInit {
  slideConfig = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots: true,
    prevArrow: '<button class="leftRs ft-chevron-left"></button>',
    nextArrow: '<button class="rightRs ft-chevron-right"></button>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 605,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  images = [
    "https://kenwheeler.github.io/slick/img/fonz1.png",
    "https://kenwheeler.github.io/slick/img/fonz2.png",
    "https://kenwheeler.github.io/slick/img/lazyfonz3.png",
    "https://kenwheeler.github.io/slick/img/lazyfonz4.png"]
  constructor() { }

  ngOnInit(): void {
  }

}
