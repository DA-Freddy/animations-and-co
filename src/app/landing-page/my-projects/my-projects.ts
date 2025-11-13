import { Component } from '@angular/core';
import { Project } from '../../project';

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss',
})
export class MyProjects {
  projects : Project[] 
  = [
    {projectname : 'sakura',
    modul: 3,
    done: true
  },
  {projectname : 'Pollo Loco',
    modul: 12,
    done: true,
    description: 'Is a 2D game'
  },
  {projectname : 'Portfolio',
    modul: 15,
    done: false
  }
];
}
