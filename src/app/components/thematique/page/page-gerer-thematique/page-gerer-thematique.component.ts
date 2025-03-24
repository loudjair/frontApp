import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Thematique } from 'src/app/models/Thematique/thematique';

@Component({
  selector: 'app-page-gerer-thematique',
  templateUrl: './page-gerer-thematique.component.html',
  styleUrls: ['./page-gerer-thematique.component.css']
})
export class PageGererThematiqueComponent {
  public storeThematique!:Thematique; 

  constructor(private location:Location){}
  store(thematique:Thematique):void{
    this.storeThematique = thematique;
  }
  retour():void{
    this.location.back();
  }
}
