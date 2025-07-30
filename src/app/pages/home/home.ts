import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {
  descargarArchivo() {
    const link = document.createElement("a");
    link.href = "assets/CV-Andres-Giraldo.pdf";
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
