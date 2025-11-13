import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  openMenu : boolean = false;

  startAnimation(){
    this.openMenu = !this.openMenu;
    // if(this.openMenu){
    //   this.openMenu = false;
    // }
    // else{
    //   this.openMenu = true;
    // }
  }
}
