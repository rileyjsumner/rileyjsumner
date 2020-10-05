import { Component, OnInit } from '@angular/core';
import project from '../../data/projects.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project: any;
  constructor() {
    this.project = project;
  }

  ngOnInit(): void {
  }

}
