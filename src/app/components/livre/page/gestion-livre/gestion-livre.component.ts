import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/models/Livre/livre';
import { LivreService } from 'src/app/services/Livre/livre.service';

@Component({
  selector: 'app-gestion-livre',
  templateUrl: './gestion-livre.component.html',
  styleUrls: ['./gestion-livre.component.css']
})
export class GestionLivreComponent implements OnInit{
  public livre$!:Observable<Livre>;
  public parametres !:UrlSegment[];
  constructor(private service:LivreService,private route:ActivatedRoute,private location:Location){}
  ngOnInit(): void {
    this.parametres = this.route.snapshot.url;
    //Récupération de l'identifiant du thematique
    const routeParams = this.route.snapshot.paramMap;

    const livreId = Number(routeParams.get('id'));
    
    this.livre$ = this.service.show(livreId);
  }
  //A modifier
  update(livre$:Observable<Livre>):void{
    this.livre$ = livre$;
  }
  retour():void{
    this.location.back();
  }
}
