import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  display:string = "none";
  constructor(private rendrer:Renderer2, private el:ElementRef) { }

  ngOnInit(): void {
  }
  mouse(dis: string){
    this.display = dis;
    let el = this.el.nativeElement.querySelector('#app-sub-header');
    this.rendrer.setStyle(el, 'display', dis);
}
mouse2(dis:string){
  let el2 = this.el.nativeElement.querySelector('.triangle');
  this.rendrer.setStyle(el2, 'display', dis);
}

}
