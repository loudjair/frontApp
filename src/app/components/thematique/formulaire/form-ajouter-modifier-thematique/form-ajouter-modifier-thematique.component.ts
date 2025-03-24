import { Component,EventEmitter,Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ThematiqueService } from 'src/app/services/Thematique/thematique.service';
import { FormBuilder } from '@angular/forms';
import { Thematique } from 'src/app/models/Thematique/thematique';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-ajouter-modifier-thematique',
  templateUrl: './form-ajouter-modifier-thematique.component.html',
  styleUrls: ['./form-ajouter-modifier-thematique.component.css']
})
export class FormAjouterModifierThematiqueComponent implements OnChanges{
  @Input() typeAction:string = "";
  @Input() _thematique!:Thematique;
  @Output() storeEvent = new EventEmitter<Thematique>();
  @Output() updateEvent = new EventEmitter<Observable<Thematique>>();
  public thematiqueForm = this.formBuilder.group({
    id:0,
    thematique:[""],
    description:[""],
    image:[""]
  });
  public images:string[] = ["","img1","img2","img3","img4","img5","img6","img7"];
  constructor(private service:ThematiqueService, private formBuilder:FormBuilder){}

  ngOnChanges(changes: SimpleChanges): void {
    if("update" == this.typeAction && changes["_thematique"].currentValue != changes["_thematique"].previousValue){
      this.thematiqueForm.patchValue({
        id:this._thematique.id,
        thematique:this._thematique.thematique,
        description:this._thematique.description,
        image:this._thematique.image
      });
    } 
  }

  store():void{
    this.service.store(this.thematiqueForm.value).subscribe({
      next:(thematique:Thematique)=>{
        this.storeEvent.emit(thematique);
       //this.showMessage("CorpsMessageThematique","succes","Nouveau theme ajouté !");
        this.thematiqueForm.reset();
      },
      error:()=>{
        //this.showMessage("CorpsMessageThematique","echec","L'ajout a échoué !");
      }
    });
  }

  update():void{
    this.updateEvent.emit(this.service.update(this.thematiqueForm.value));
    this.thematiqueForm.reset();
  }

  action():void{
    if("update" == this.typeAction){
      this.update()
    }
    if("store" == this.typeAction){
      this.store()
    }
  }
  showMessage(id:string,classe:string,contenu:string):void{
    const corps = document.getElementById(id);
    const message = document.getElementById("messageThematique");
    if(corps != null){
      corps.classList.toggle("hide-message");
      corps.classList.toggle(classe);
      if(message){
        message.innerText = contenu;
      }
    }
  }
}
