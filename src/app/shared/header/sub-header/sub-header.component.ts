import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit, AfterViewInit {
  headerHeight:number = 0;
  constructor() { 
  }
  ngOnInit(): void {
    this.headerHeight = $('#main-header').height()+15;
  }
  ngAfterViewInit(){
    $( window ).resize(()=> {  
      this.headerHeight = $('#main-header').height()+15;
    });
  }

}