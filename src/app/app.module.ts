import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WritingComponent } from './views/writing/writing.component';
import { GraphicsComponent } from './views/graphics/graphics.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { TagsComponent } from './views/tags/tags.component';
import { TagComponent } from './components/tag/tag.component';
import { CardComponent } from './components/card/card.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    WritingComponent,
    GraphicsComponent,
    NotfoundComponent,
    TagsComponent,
    TagComponent,
    CardComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
