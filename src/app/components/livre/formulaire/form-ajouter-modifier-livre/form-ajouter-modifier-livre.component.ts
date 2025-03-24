import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { LivreService } from 'src/app/services/Livre/livre.service';
import { FormBuilder } from '@angular/forms';
import { Livre } from 'src/app/models/Livre/livre';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-ajouter-modifier-livre',
  templateUrl: './form-ajouter-modifier-livre.component.html',
  styleUrls: ['./form-ajouter-modifier-livre.component.css']
})
export class FormAjouterModifierLivreComponent implements OnChanges {
  @Input() typeAction:string = "";
  @Input() updateLivre!:Livre;
  @Output() storeEvent = new EventEmitter<Livre>();
  @Output() updateEvent = new EventEmitter<Observable<Livre>>();
  public livreForm = this.formBuilder.group({
    id:0,
    titre:[""],
    testament:[""],
    apocryphe:[""],
    chapitre_total:0,
    verset_total:0,
    description:[""]
  })
  constructor(private service:LivreService, private formBuilder:FormBuilder){}

  ngOnChanges(changes: SimpleChanges): void {
    if('update' == this.typeAction && changes["updateLivre"].currentValue != changes["updateLivre"].previousValue){
      this.livreForm.patchValue({
        id:this.updateLivre.id,
        titre:this.updateLivre.titre,
        testament:this.updateLivre.testament,
        apocryphe:this.updateLivre.apocryphe,
        chapitre_total:this.updateLivre.chapitre_total,
        verset_total:this.updateLivre.verset_total,
        description:this.updateLivre.description
      });
    }
  }

  store():void{
    this.service.store(this.livreForm.value).subscribe({
      next:(livre:Livre)=>{
        this.storeEvent.emit(livre);
        this.showMessage("CorpsMessageLivre","succes","Nouveau livre ajouté !");
        this.livreForm.reset();
      },
      error:()=>{
        this.showMessage("CorpsMessageLivre","echec","Opération ajout échoué !");
      }
    })
  }

  update():void{
    this.updateEvent.emit(this.service.update(this.livreForm.value));
    this.livreForm.reset();
  }

  action():void{
    if('store' == this.typeAction){
      this.store()
    }
    if('update' == this.typeAction){
      this.update()
    }
  }

  showMessage(id:string,classe:string,contenu:string):void{
    const corps = document.getElementById(id);
    const message = document.getElementById("messageLivre");
    if(corps != null){
      corps.classList.toggle("hide-message");
      corps.classList.toggle(classe);
      if(message){
        message.innerText = contenu;
      }
    }
  }
}
