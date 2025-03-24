import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Thematique } from 'src/app/models/Thematique/thematique';
import { ThematiqueService } from 'src/app/services/Thematique/thematique.service';

@Component({
  selector: 'app-gestion-thematique',
  templateUrl: './gestion-thematique.component.html',
  styleUrls: ['./gestion-thematique.component.css']
})
export class GestionThematiqueComponent implements OnInit{
  public thematique$!:Observable<Thematique>;
  public parametres!:UrlSegment[];
  constructor(private service:ThematiqueService,private route:ActivatedRoute,private location:Location){}
  ngOnInit(): void {
    this.parametres = this.route.snapshot.url;
    //Récupération de l'identifiant du thematique
    const routeParams = this.route.snapshot.paramMap;

    const thematiqueId = Number(routeParams.get('thematique_id'));
    
    this.thematique$ = this.service.show(thematiqueId);
  }
  updatedThematique(thematique$:Observable<Thematique>):void{
    this.thematique$ = thematique$;
  }
  retour():void{
    this.location.back();
  }
}
