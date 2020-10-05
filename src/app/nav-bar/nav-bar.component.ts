import { Component, OnInit } from '@angular/core';
import navLinks from '../../data/navlinks';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navLinks: any;
  constructor() {
    this.navLinks = navLinks;
  }

  ngOnInit(): void {
  }

}
