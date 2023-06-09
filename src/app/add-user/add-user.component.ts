import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  enregistrementReussiMessage: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Initialisation du formulaire avec les contrôles requis
    this.userForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      job: [''],
      phone: ['']
    });
  }

  ngOnInit(): void {
    // Méthode ngOnInit pour initialiser le composant (vide dans cet exemple)
  }

  onSubmit() {
    // Fonction appelée lorsque le formulaire est soumis
    if (this.userForm.valid) {
      if (!this.isEditMode()) {
        // Enregistrement initial

        // Envoi d'une requête POST à l'API pour enregistrer les données utilisateur
        this.http.post('https://reqres.in/api/users', this.userForm.value)
          .subscribe(
            (response) => {
              // Callback en cas de succès de la requête
              console.log('Enregistrement réussi:', response);
              // Redirection vers la page de listing des utilisateurs avec un message de succès
              this.router.navigate(['/gestion-utilisateurs'], { state: { message: 'Enregistrement réussi !' } });
            },
            (error) => {
              // Callback en cas d'erreur de la requête
              console.error('Erreur lors de l\'enregistrement:', error);
              this.enregistrementReussiMessage = "Erreur lors de l'enregistrement: " + error.message;
            }
          );
      } else {
        // Modification

        // Envoi d'une requête PUT à l'API pour mettre à jour les données utilisateur
        this.http.put('https://reqres.in/api/users', this.userForm.value)
          .subscribe(
            (response) => {
              // Callback en cas de succès de la requête
              console.log('Modification réussie:', response);
              // Redirection vers la page de listing des utilisateurs avec un message de succès personnalisé
              this.router.navigate(['/gestion-utilisateurs'], { state: { message: 'Modification réussie !' } });
            },
            (error) => {
              // Callback en cas d'erreur de la requête
              console.error('Erreur lors de la modification:', error);
              this.enregistrementReussiMessage = "Erreur lors de la modification: " + error.message;
            }
          );
      }
    }
  }

  isEditMode(): boolean {
    // Vérifier si le composant est en mode modification
    // Par exemple, en vérifiant si un identifiant utilisateur est disponible dans l'URL ou une variable du composant
    // Retourne true si le composant est en mode modification, false sinon
    return false;
  }
}
