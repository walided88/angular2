import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedLanguage: string = 'en'; // Langue sélectionnée par défaut

  constructor(private translateService: TranslateService) {}

  // Méthode appelée lorsqu'une langue est sélectionnée dans le composant d'interface utilisateur
  changeLanguage(selectedLanguage: string) {
    this.translateService.use(selectedLanguage); // Utilise le service TranslateService pour changer la langue
  }
}
