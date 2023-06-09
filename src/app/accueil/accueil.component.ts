import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  title = 'tp2';

  constructor(private translateService: TranslateService) {
    // Injecte le service TranslateService dans le constructeur

    // Définit la langue par défaut sur 'en' (anglais)
    this.translateService.setDefaultLang('en');

    // Utilise la langue 'en' (anglais)
    this.translateService.use('en');
  }
}
