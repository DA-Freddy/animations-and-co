import { Component } from '@angular/core';
import { Project } from '../../project';
import {TranslatePipe} from '@ngx-translate/core';


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
}
