import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RileySumner';
  innerWidth: any;

  constructor(private el: ElementRef) {

  }

  closeMenu() {
    if(this.innerWidth < 900) {
      let menu = this.el.nativeElement.querySelector(".nav-items");
      menu.classList.add('closed');
      menu.style.height = "0px";
    }
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
}
