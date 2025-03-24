import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Personnage } from 'src/app/models/Personnage/personnage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-gerer-personnage',
  templateUrl: './page-gerer-personnage.component.html',
  styleUrls: ['./page-gerer-personnage.component.css']
})
export class PageGererPersonnageComponent {

  public personnage!:Personnage;
  public tmpPersonnage!:Personnage;
  public storePersonnage!:Personnage;
  public rechercheForm = this.fb.group({
    id:0,
    nom:'',
    testament:'',
    sexe:''
  });


  constructor(private fb:FormBuilder,private location:Location){}

  updatePersonnage(personnage:Personnage):void{
    this.personnage = personnage;
    this.tmpPersonnage = personnage;
  }

  showMessage(id:string):void{
    const message = document.getElementById(id);
    if(message != null){
      message.classList.toggle("hide-message");
      if(message.classList.contains("succes")){
        message.classList.toggle("succes");
      }
      if(message.classList.contains("echec")){
        message.classList.toggle("echec");
      }
    }
  }
  store(personnage:Personnage):void{
    this.storePersonnage = personnage;
  }
  retour():void{
    this.location.back();
  }
}
