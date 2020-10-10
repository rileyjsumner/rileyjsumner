import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import experience from '../../data/experience';
import projects from '../../data/projects';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  unFilteredItems: any;
  projectSlug: any;
  project: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.unFilteredItems = experience.concat(projects);
    this.projectSlug = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.projectSlug = routeParams.slug;
      for(let i = 0; i < this.unFilteredItems.length; i++) {
        if(this.unFilteredItems[i].slug === this.projectSlug) {
          this.project = this.unFilteredItems[i];
          console.log(this.project);
        }
      }
    });
  }

}
