import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/models/Theme/theme';
import { ThemeLivre } from 'src/app/models/ThemeLivre/theme-livre';
import { ThemeService } from 'src/app/services/Theme/theme.service';

@Component({
  selector: 'app-gestion-theme',
  templateUrl: './gestion-theme.component.html',
  styleUrls: ['./gestion-theme.component.css']
})
export class GestionThemeComponent implements OnInit{
  public theme$!:Observable<Theme>;
  
  public classes = {
    generale:{tabcontent:true,displayNone:true,displayFlex:false},
    passage:{tabcontent:true,displayNone:true,displayFlex:false}
  };

  public tablinksClasses = {
    generale:{tablink:true,tablinkActive:false},
    passage:{tablink:true,tablinkActive:false}
  };

  public actionFormThemeLivre:string="store";
  public passageToUpdate!:ThemeLivre;
  public newPassage!:ThemeLivre;
  public updatePassage!:ThemeLivre;
  public parametres!:UrlSegment[];

  constructor(private service:ThemeService,private route:ActivatedRoute,private location:Location){}
  ngOnInit(): void {
    this.parametres = this.route.snapshot.url;
    //Récupération de l'identifiant du thematique
    const routeParams = this.route.snapshot.paramMap;

    const themeId = Number(routeParams.get('theme_id'));
    
    this.theme$ = this.service.show(themeId);
  }
  activerOnglet(onglet:string):void{
    this.initOnglet();
    
    if(onglet=="generale"){
      this.classes.generale.displayNone = !this.classes.generale.displayNone;
      this.classes.generale.displayFlex = !this.classes.generale.displayFlex;
      this.tablinksClasses.generale.tablink = false;
      this.tablinksClasses.generale.tablinkActive = true;
    }
    else{
      this.classes.passage.displayNone = !this.classes.passage.displayNone;
      this.classes.passage.displayFlex = !this.classes.passage.displayFlex;
      this.tablinksClasses.passage.tablink = false;
      this.tablinksClasses.passage.tablinkActive = true;
    }
  }

  initOnglet():void{
    this.classes = {
      generale: {tabcontent:true,displayNone:true,displayFlex:false},
      passage:{tabcontent:true,displayNone:true,displayFlex:false}
    };

    this.tablinksClasses = {
      generale:{tablink:true,tablinkActive:false},
      passage:{tablink:true,tablinkActive:false}
    };
  }
  themeUpdated(theme$:Observable<Theme>):void{
    this.theme$ = theme$;
  }
  storePassageBiblique(passage:ThemeLivre):void{
    this.actionFormThemeLivre = 'store';
    this.newPassage = passage;
  }
  updatePassageBiblique(passage:ThemeLivre):void{
    this.actionFormThemeLivre = 'store';
    this.updatePassage = passage;
  }
  modifierPassage(passage:ThemeLivre):void{
    this.actionFormThemeLivre = 'update';
    this.passageToUpdate = passage;
  }
  retour():void{
    this.location.back();
  }  
}
