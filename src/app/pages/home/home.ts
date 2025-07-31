import { Component } from "@angular/core";
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: "app-home",
  standalone: true,
  imports: [TranslateModule,],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {
  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en']);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');
  }
  
  descargarArchivo() {
    const link = document.createElement("a");
    link.href = "assets/documents/CV-Andres-Giraldo.pdf";
    link.download = "CV-Andres-Giraldo.pdf";
    link.click();
  }
  abrirGithub() {
    window.open("https://github.com/AndresGT", "_blank");
  }
  linkedin() {
    window.open("https://www.linkedin.com/in/dvandresgt/", "_blank");
  }
}
