import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Livre } from 'src/app/models/Livre/livre';

@Component({
  selector: 'app-page-gerer-livre',
  templateUrl: './page-gerer-livre.component.html',
  styleUrls: ['./page-gerer-livre.component.css']
})
export class PageGererLivreComponent {
  public msg:string="";
  public storeLivre!:Livre;

  constructor(private location:Location){}
  store(livre:Livre):void{
    this.storeLivre = livre;
  }
  retour():void{
    this.location.back();
  }
  fermer():void{
    this.msg ="";
  }
}
