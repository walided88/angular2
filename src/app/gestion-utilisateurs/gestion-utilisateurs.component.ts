import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

// Interface représentant un utilisateur
interface Utilisateur {
  isSuppression: boolean;
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  isActionVisible?: boolean;
}

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.css']
})
export class GestionUtilisateursComponent implements OnInit {
  utilisateurs: any[] = [];
  enregistrementReussiMessage: string | undefined = '';
  user: any;
  isLoading: boolean | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    // Appel à la méthode pour récupérer les utilisateurs
    this.getUtilisateurs();

    // Récupération du message de succès de l'enregistrement depuis l'historique de navigation
    this.enregistrementReussiMessage = history.state.message;
  }

  onSubmit() {

  
    
    // Logique de traitement du formulaire et enregistrement réussi
    this.enregistrementReussiMessage = "Enregistrement réussi: " + JSON.stringify(this.user);
  }

  getUtilisateurs() {
    // Appel à l'API pour récupérer les utilisateurs
    this.http.get<any>(environment.apiPrefix + 'users').subscribe(
      response => {
        // Transformation de la réponse pour inclure une propriété supplémentaire
        this.utilisateurs = response.data.map((utilisateur: Utilisateur) => ({
          ...utilisateur,
          isSuppression: false
        }));
      },
      (error: HttpErrorResponse) => {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs:', error.message);
      }
    );
  }

  mettreAJourUtilisateur(utilisateur: Utilisateur) {
    // Logique de mise à jour d'un utilisateur
    // ...
  }
  
  supprimerUtilisateur(utilisateur: Utilisateur) {
    // Suppression d'un utilisateur de la liste des utilisateurs
    const index = this.utilisateurs.indexOf(utilisateur);
    if (index !== -1) {
      this.utilisateurs.splice(index, 1);
    }
  }
}
