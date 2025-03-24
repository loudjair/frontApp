import { Component,EventEmitter,Input,OnChanges,Output,SimpleChanges } from '@angular/core';
import { PersonnageService } from 'src/app/services/Personnage/personnage.service';
import { FormBuilder } from '@angular/forms';
import { Personnage } from 'src/app/models/Personnage/personnage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-ajouter-modifier-personnage',
  templateUrl: './form-ajouter-modifier-personnage.component.html',
  styleUrls: ['./form-ajouter-modifier-personnage.component.css']
})
export class FormAjouterModifierPersonnageComponent implements OnChanges{

  @Input() typeAction:string="";
  @Input() updatePersonnage!:Personnage;
  @Output() storeEvent = new EventEmitter<Personnage>();
  @Output() updateEvent = new EventEmitter<Observable<Personnage>>();
  public personnageForm = this.formBuilder.group({
    id:0,
    testament:[""],
    nom:[""],
    sexe:[""],
    description:[""],
    naissance:this.formBuilder.group({
      date:"",
      localite:this.formBuilder.group({
        lieu:[""],
        ville:[""],
        region:[""],
        pays:[""]
      })
    }),
    deces:this.formBuilder.group({
      date:"",
      localite:this.formBuilder.group({
        lieu:[""],
        ville:[""],
        region:[""],
        pays:[""]
      })
    })
  })
  constructor(private service:PersonnageService,private formBuilder:FormBuilder){}
  ngOnChanges(changes: SimpleChanges): void {
    if("update" == this.typeAction  && changes["updatePersonnage"].currentValue != changes["updatePersonnage"].previousValue){ 
      this.personnageForm.patchValue({
        id:this.updatePersonnage.id,
        testament:this.updatePersonnage.testament,
        nom:this.updatePersonnage.nom,
        sexe:this.updatePersonnage.sexe,
        naissance:this.updatePersonnage.naissance,
        deces:this.updatePersonnage.deces,
        description:this.updatePersonnage.description
      });
    }
  }
  store():void{
    this.service.store(this.personnageForm.value).subscribe({
      next:(personnage:Personnage)=>{
        this.storeEvent.emit(personnage);
        this.personnageForm.reset();
      }
    });
  }

  update():void{
    this.updateEvent.emit(this.service.update(this.personnageForm.value));
  }

  action():void{
    if("store" == this.typeAction){
      this.store()
    }
    else if("update" == this.typeAction){
      this.update()
    }
  }

  showMessage(id:string,classe:string,contenu:string):void{
    const corps = document.getElementById(id);
    const message = document.getElementById("messagePersonnage");
    if(corps != null){
      corps.classList.toggle("hide-message");
      corps.classList.toggle(classe);
      if(message){
        message.innerText = contenu;
      }
    }
  }
}
