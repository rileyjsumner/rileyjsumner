import { Component, OnInit } from '@angular/core';
import graphics from '../../data/graphics';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  graphics: any;
  constructor() {
    this.graphics = graphics;
  }

  ngOnInit(): void {
  }

}
