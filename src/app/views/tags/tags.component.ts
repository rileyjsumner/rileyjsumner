import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import experience from '../../../data/experience';
import projects from "../../../data/projects";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  unFilteredItems: any;
  items: any;
  tag: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.unFilteredItems = experience.concat(projects);
    this.items = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.tag = routeParams.tag;
      this.items = [];
      for(let i = 0; i < this.unFilteredItems.length; i++) {
        if(this.unFilteredItems[i].lang.includes(this.tag)) {
          this.items.push(this.unFilteredItems[i]);
        }
      }
    });
  }

}
