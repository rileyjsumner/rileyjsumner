import { Component, OnInit } from '@angular/core';
import achievements from '../../data/achievements';
import leadership from '../../data/leadership';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  achievements: any;
  leadership: any;
  constructor() {
    this.achievements = achievements;
    this.leadership = leadership;
  }

  ngOnInit(): void {
  }

}
