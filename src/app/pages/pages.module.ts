import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { BookTheCarComponent } from './book-the-car/book-the-car.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';
import { BrandsComponent } from './brands/brands.component';
import { DownloadComponent } from './download/download.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HitsRoadComponent } from './hits-road/hits-road.component';
import { BottomBrandComponent } from './bottom-brand/bottom-brand.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes:Routes = [{
  path:'', component:HomeComponent
}]
@NgModule({
  declarations: [HomeComponent, SliderComponent, BookTheCarComponent, WhatWeOfferComponent, BecomePartnerComponent, BrandsComponent, DownloadComponent, DestinationsComponent, HitsRoadComponent, BottomBrandComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SlickCarouselModule
  ]
})
export class PagesModule { }
