import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/models/Theme/theme';
import { ThemeService } from 'src/app/services/Theme/theme.service';
import { ongletLivre,ongletActif,NomLivre} from 'src/assets/api';
import { OngletClass } from 'src/app/models/Onglet/onglet-class';
import { OngletActif } from 'src/app/models/Onglet/onglet-actif';
import { Livre } from 'src/app/models/Livre/livre';
import { Location } from '@angular/common';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit{
  public theme$!:Observable<Theme>;
  public classes:OngletClass = ongletLivre;
  public ongletsActifs:OngletActif = ongletActif;
  public parametres!:UrlSegment[];
  constructor(
    private service:ThemeService,
    private route:ActivatedRoute,
    private location:Location){}

  ngOnInit(): void {
    this.parametres = this.route.snapshot.url;
    //Récupération de l'identifiant du theme
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.theme$ = this.service.show(id);
  }

  image(url:string):string{
    return "../../../../../assets/images/croix.jpg";
  }
  activerOnglet(livre:Livre):void{

    let titreCourant:NomLivre = livre.titre as NomLivre;
    let titrePrecedent!:NomLivre;

    //Vérification du testament
    if(livre.testament == 'ancien'){
      if(this.ongletsActifs.ancien != ""){
        titrePrecedent = this.ongletsActifs.ancien as NomLivre;
      }
      //Valorisation de l'onglet actif
      this.ongletsActifs.ancien = livre.titre;
    }

    //Vérification du testament
    if(livre.testament == 'nouveau'){
      if(this.ongletsActifs.nouveau != ""){
        titrePrecedent = this.ongletsActifs.nouveau as NomLivre;
      }
      //Valorisation de l'onglet actif
      this.ongletsActifs.nouveau = livre.titre;
    }

    //Désactivation de l'onglet courant
    if(titrePrecedent){
      this.classes[titrePrecedent].displayNone = !this.classes[titrePrecedent].displayNone;
      this.classes[titrePrecedent].displayFlex = !this.classes[titrePrecedent].displayFlex;
    }
    //Activation du nouvel onglet
    this.classes[titreCourant].displayNone = !this.classes[titreCourant].displayNone;
    this.classes[titreCourant].displayFlex = !this.classes[titreCourant].displayFlex;
  }
  fctTest(livre:string):NomLivre{
    return livre as NomLivre;
  }
  retour():void{
    this.location.back();
  }
}
