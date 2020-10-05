import { Component, OnInit } from '@angular/core';
import skills from '../../data/skills.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;

  constructor() {
    this.skills = skills;
  }

  ngOnInit(): void {
  }

}
