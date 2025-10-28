import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAjouterModifierLivreComponent } from './components/livre/formulaire/form-ajouter-modifier-livre/form-ajouter-modifier-livre.component';
import { TabLivreComponent } from './components/livre/Tableau/tab-livre/tab-livre.component';
import { FormAjouterModifierPersonnageComponent } from './components/personnage/formulaire/form-ajouter-modifier-personnage/form-ajouter-modifier-personnage.component';
import { TabPersonnageComponent } from './components/personnage/Tableau/tab-personnage/tab-personnage.component';
import { FormAjouterModifierRoleComponent } from './components/role/formulaire/form-ajouter-modifier-role/form-ajouter-modifier-role.component';
import { TabRoleComponent } from './components/role/Tableau/tab-role/tab-role.component';
import { FormAjouterModifierThematiqueComponent } from './components/thematique/formulaire/form-ajouter-modifier-thematique/form-ajouter-modifier-thematique.component';
import { TabThematiqueComponent } from './components/thematique/Tableau/tab-thematique/tab-thematique.component';
import { FormAjouterModifierPersonnageRoleComponent } from './components/personnageRole/formulaire/form-ajouter-modifier-personnage-role/form-ajouter-modifier-personnage-role.component';
import { TabPersonnageRoleComponent } from './components/personnageRole/tableau/tab-personnage-role/tab-personnage-role.component';
import { RouterModule } from '@angular/router';
import { PageInfoPersonnageComponent } from './components/personnage/page/page-info-personnage/page-info-personnage.component';
import { PagePrincipalePersonnageComponent } from './components/personnage/page/page-principale-personnage/page-principale-personnage.component';
import { PageGererPersonnageComponent } from './components/personnage/page/page-gerer-personnage/page-gerer-personnage.component';
import { PageGererLivreComponent } from './components/livre/page/page-gerer-livre/page-gerer-livre.component';
import { PageGererThematiqueComponent } from './components/thematique/page/page-gerer-thematique/page-gerer-thematique.component';
import { RolePipe } from './pipes/Role/role.pipe';
import { PageConnexionComponent } from './components/compte/page/page-connexion/page-connexion.component';
import { PageCompteComponent } from './components/compte/page/page-compte/page-compte.component';
import { authentificationGuard } from './guards/authentification.guard';
import { connexionGuard } from './guards/connexion.guard';
import { PageGestionCompteComponent } from './components/compte/page/page-gestion-compte/page-gestion-compte.component';
import { PageAdministrationUserComponent } from './components/compte/page/page-administration-user/page-administration-user.component';
import { autorisationGuard } from './guards/autorisation.guard';
import { AjoutModifThemeComponent } from './components/theme/formulaire/ajout-modif-theme/ajout-modif-theme.component';
import { TabThemeComponent } from './components/theme/tab/tab-theme/tab-theme.component';
import { GererThemeComponent } from './components/theme/page/gerer-theme/gerer-theme.component';
import { AjoutModifThemeLivreComponent } from './components/themeLivre/formulaire/ajout-modif-theme-livre/ajout-modif-theme-livre.component';
import { TabThemeLivreComponent } from './components/themeLivre/tableau/tab-theme-livre/tab-theme-livre.component';
import { AjoutModifRelationComponent } from './components/relation/formulaire/ajout-modif-relation/ajout-modif-relation.component';
import { TabRelationComponent } from './components/relation/tableau/tab-relation/tab-relation.component';
import { EvenementPipe } from './pipes/Evenement/evenement.pipe';
import { GererRoleComponent } from './components/role/page/gerer-role/gerer-role.component';
import { PersonnagePipe } from './pipes/Personnage/personnage.pipe';
import { AccueilComponent } from './components/accueil/accueil.component';
import { EntouragePipe } from './pipes/Entourage/entourage.pipe';
import { AccueilThematiqueComponent } from './components/thematique/page/accueil-thematique/accueil-thematique.component';
import { ThemeComponent } from './components/theme/page/theme/theme.component';
import { TestamentPipe } from './pipes/Testament/testament.pipe';
import { NomLivrePipe } from './pipes/Parse/nom-livre.pipe';
import { GestionPersonnageComponent } from './components/personnage/page/gestion-personnage/gestion-personnage.component';
import { GestionThematiqueComponent } from './components/thematique/page/gestion-thematique/gestion-thematique.component';
import { GestionThemeComponent } from './components/theme/page/gestion-theme/gestion-theme.component';
import { GestionLivreComponent } from './components/livre/page/gestion-livre/gestion-livre.component';
import { GestionRoleComponent } from './components/role/page/gestion-role/gestion-role.component';
import { GestionUtilisateurComponent } from './components/utilisateur/page/gestion-utilisateur/gestion-utilisateur.component';
import { LivrePipe } from './pipes/Livre/livre.pipe';
import { CheminPipe } from './pipes/URL/chemin.pipe';
import { SexePipe } from './pipes/Sexe/sexe.pipe';
import { PagePrincipaleParoleComponent } from './components/parole/page/page-principale-parole/page-principale-parole.component';



@NgModule({
  declarations: [
    AppComponent,
    FormAjouterModifierLivreComponent,
    TabLivreComponent,
    FormAjouterModifierPersonnageComponent,
    TabPersonnageComponent,
    FormAjouterModifierRoleComponent,
    TabRoleComponent,
    FormAjouterModifierThematiqueComponent,
    TabThematiqueComponent,
    FormAjouterModifierPersonnageRoleComponent,
    TabPersonnageRoleComponent,
    PageInfoPersonnageComponent,
    PagePrincipalePersonnageComponent,
    PageGererPersonnageComponent,
    PageGererLivreComponent,
    PageGererThematiqueComponent,
    RolePipe,
    PageConnexionComponent,
    PageCompteComponent,
    PageGestionCompteComponent,
    PageAdministrationUserComponent,
    AjoutModifThemeComponent,
    TabThemeComponent,
    GererThemeComponent,
    AjoutModifThemeLivreComponent,
    TabThemeLivreComponent,
    AjoutModifRelationComponent,
    TabRelationComponent,
    EvenementPipe,
    GererRoleComponent,
    PersonnagePipe,
    AccueilComponent,
    EntouragePipe,
    AccueilThematiqueComponent,
    ThemeComponent,
    TestamentPipe,
    NomLivrePipe,
    GestionPersonnageComponent,
    GestionThematiqueComponent,
    GestionThemeComponent,
    GestionLivreComponent,
    GestionRoleComponent,
    GestionUtilisateurComponent,
    LivrePipe,
    CheminPipe,
    SexePipe,
    PagePrincipaleParoleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:AccueilComponent},
      {path:'compte',component:PageCompteComponent,canActivate:[authentificationGuard]},
      {path:'compte/login',component:PageConnexionComponent,canActivate:[connexionGuard]},
      {path:'compte/gestion',component:PageGestionCompteComponent,canActivate:[authentificationGuard]},
      {path:'compte/gestion/livres',component:PageGererLivreComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/livres/:id',component:GestionLivreComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/personnages',component:PageGererPersonnageComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/personnages/:id',component:GestionPersonnageComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/roles',component:GererRoleComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/roles/:id',component:GestionRoleComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/thematiques',component:PageGererThematiqueComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/thematiques/:thematique_id',component:GestionThematiqueComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/themes',component:GererThemeComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/themes/:theme_id',component:GestionThemeComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/utilisateurs',component:PageAdministrationUserComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'compte/gestion/utilisateurs/:id',component:GestionThemeComponent,canActivate:[authentificationGuard,autorisationGuard]},
      {path:'paroles',component:PagePrincipaleParoleComponent},
      {path:'personnages',component:PagePrincipalePersonnageComponent},
      {path:'personnages/:id',component:PageInfoPersonnageComponent},
      {path:'thematiques',component:AccueilThematiqueComponent},
      {path:'themes/:id',component:ThemeComponent},
    ],{onSameUrlNavigation:"reload"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
