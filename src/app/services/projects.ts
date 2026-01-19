import { Injectable } from '@angular/core';
import { Project } from '../project';


@Injectable({
  providedIn: 'root',
})
export class Projects {
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
  // {projectname : 'Portfolio',
  //   modul: 15,
  //   done: false
  // }
];

  addProject(){
    
  }
}
