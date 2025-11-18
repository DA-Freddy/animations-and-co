import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import {TranslatePipe, TranslateDirective, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  openMenu: boolean = false;

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  startAnimation() {
    this.openMenu = !this.openMenu;
    // if(this.openMenu){
    //   this.openMenu = false;
    // }
    // else{
    //   this.openMenu = true;
    // }
  }


}
