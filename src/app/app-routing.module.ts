import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperienceComponent} from "./experience/experience.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {WritingComponent} from "./writing/writing.component";
import {GraphicsComponent} from "./graphics/graphics.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {TagsComponent} from "./tags/tags.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', redirectTo: '', pathMatch: 'full' },
  { path: 'Experience', component: ExperienceComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Writing', component: WritingComponent },
  { path: 'Graphics', component: GraphicsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Tags/:tag', component: TagsComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
