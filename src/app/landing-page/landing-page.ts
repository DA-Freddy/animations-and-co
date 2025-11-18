import { Component } from '@angular/core';
import { AboutMe } from "./about-me/about-me";
import { Inhalte } from './inhalte/inhalte';
import { MyProjects } from './my-projects/my-projects';
import { TranslatePipe } from '@ngx-translate/core';




@Component({
  selector: 'app-landing-page',
  imports: [ AboutMe, Inhalte, MyProjects, TranslatePipe],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.scss',],
})
export class LandingPage {

}
