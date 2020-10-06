import {Component, ElementRef, OnInit} from '@angular/core';
import navLinks from '../../../data/navlinks';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navLinks: any;
  constructor(private el: ElementRef) {
    this.navLinks = navLinks;
  }

  toggleMenu() {
    let menu = this.el.nativeElement.querySelector(".nav-items");
    if(!menu.classList.contains('closed')) {
      menu.classList.add('closed');
      menu.style.height = "0px";
    } else {
      menu.classList.remove('closed');
      menu.style.height = (this.navLinks.length * 2.5)+"rem";
    }
  }

  closeMenu() {
    let menu = this.el.nativeElement.querySelector(".nav-items");
    menu.classList.add('closed');
    menu.style.height = "0px";
  }

  ngOnInit(): void {
  }

}
