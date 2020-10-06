import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperienceComponent} from "./views/experience/experience.component";
import {SkillsComponent} from "./views/skills/skills.component";
import {ProjectsComponent} from "./views/projects/projects.component";
import {ContactComponent} from "./views/contact/contact.component";
import {HomeComponent} from "./views/home/home.component";
import {WritingComponent} from "./views/writing/writing.component";
import {GraphicsComponent} from "./views/graphics/graphics.component";
import {NotfoundComponent} from "./views/notfound/notfound.component";
import {TagsComponent} from "./views/tags/tags.component";

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
