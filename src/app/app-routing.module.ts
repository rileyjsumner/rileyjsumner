import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperienceComponent} from "./experience/experience.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Experience', component: ExperienceComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
