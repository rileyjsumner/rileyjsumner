import { Component, OnInit } from '@angular/core';
import writing from '../../../data/writing';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

  writing: any;

  constructor() {
    this.writing = writing;
  }

  ngOnInit(): void {
  }

}
