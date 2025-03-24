import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thematique } from 'src/app/models/Thematique/thematique';
import { ThematiqueService } from 'src/app/services/Thematique/thematique.service';

@Component({
  selector: 'app-accueil-thematique',
  templateUrl: './accueil-thematique.component.html',
  styleUrls: ['./accueil-thematique.component.css']
})
export class AccueilThematiqueComponent implements OnInit{
  public thematiques$!:Observable<Thematique[]>;
  constructor(private service:ThematiqueService){}
  ngOnInit(): void {
    this.thematiques$ = this.service.index();
  }
  /*Retourne dans un premier temps une image par défaut*/
  image(url:string):string{
    return "assets/images/croix.jpg";
  }
}
