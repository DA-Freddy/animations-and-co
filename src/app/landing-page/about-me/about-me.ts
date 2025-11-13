import { Component } from '@angular/core';
import { Project } from '../../project';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  firstname : string = 'Max';
  age : number = 31;
  married: boolean = false;
  children : readonly (string | number)[] = ['Max', 'Lisa', 234 ,'Emma'];
}
