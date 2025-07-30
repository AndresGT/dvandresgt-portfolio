import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SiHtmxIcon } from '@semantic-icons/simple-icons';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, TranslateModule, SiHtmxIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  

  
  navItems = [
    { name: 'NAV.HOME', route: '' },
    { name: 'NAV.ABOUT', route: 'about' },
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en']);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
