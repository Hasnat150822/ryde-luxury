import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  content = [{
    headingFrom:'heading from',
    headingTo:'heading to',
    price:'15',
    priceType:'First',
    time:'40min',
    distance:'17miles'
  },
  {
    headingFrom:'heading from',
    headingTo:'heading to',
    price:'15',
    priceType:'First',
    time:'40min',
    distance:'17miles'
  },
  {
    headingFrom:'heading from',
    headingTo:'heading to',
    price:'15',
    priceType:'First',
    time:'40min',
    distance:'17miles'
  },{
    headingFrom:'heading from',
    headingTo:'heading to',
    price:'15',
    priceType:'First',
    time:'40min',
    distance:'17miles'
  },
  {
    headingFrom:'heading from',
    headingTo:'heading to',
    price:'15',
    priceType:'First',
    time:'40min',
    distance:'17miles'
  },
  {
    headingFrom:'heading from',
    headingTo:'heading to',
    price:'15',
    priceType:'First',
    time:'40min',
    distance:'17miles'
  }]
  slideConfig = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 3,
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
  constructor() { }

  ngOnInit(): void {
  }

}
