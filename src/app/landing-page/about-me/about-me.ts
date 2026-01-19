import { Component, inject } from '@angular/core';
import { Project } from '../../project';
import {TranslatePipe} from '@ngx-translate/core';
import { Projects } from '../../services/projects';


@Component({
  selector: 'app-about-me',
  imports: [ TranslatePipe,],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  firstname : string = 'Max';
  age : number = 31;
  married: boolean = false;
  children : readonly (string | number)[] = ['Max', 'Lisa', 234 ,'Emma'];

  projectService = inject(Projects);
}
