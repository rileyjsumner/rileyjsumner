import { Component, OnInit } from '@angular/core';
import thanos from '../../../data/interactive/thanos';

@Component({
  selector: 'app-thanos-league',
  templateUrl: './thanos-league.component.html',
  styleUrls: ['./thanos-league.component.css']
})
export class ThanosLeagueComponent implements OnInit {

  thanos: any;
  constructor() {
    this.thanos = thanos.sort((a, b) => b.stone_count - a.stone_count);
  }

  ngOnInit(): void {
  }

}
