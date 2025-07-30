import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SiHtmxIcon } from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, TranslateModule, SiHtmxIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
