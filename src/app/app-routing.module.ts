import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'gestion-utilisateurs', component: GestionUtilisateursComponent },
  { path: 'user-form', component: AddUserComponent },
  { path: 'enregistrement-reussi', redirectTo: '/gestion-utilisateurs', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {
  enregistrementReussiMessage: string | undefined;

  user: any;
  onSubmit() {
    // Logique de traitement du formulaire et enregistrement réussi
    this.enregistrementReussiMessage = "Enregistrement réussi: " + JSON.stringify(this.user);
  }
 }

