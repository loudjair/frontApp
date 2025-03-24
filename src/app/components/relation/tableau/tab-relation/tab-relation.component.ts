import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Personnage } from 'src/app/models/Personnage/personnage';
import { Relation } from 'src/app/models/Relation/relation';
import { PersonnageService } from 'src/app/services/Personnage/personnage.service';
import { RelationService } from 'src/app/services/Relation/relation.service';

@Component({
  selector: 'app-tab-relation',
  templateUrl: './tab-relation.component.html',
  styleUrls: ['./tab-relation.component.css']
})
export class TabRelationComponent implements OnChanges{
  @Input() entourages?:Personnage[];
  @Input() newRelation!:Relation;
  @Input() updatedRelation!:Relation;
  @Output() updateEvent = new EventEmitter<Relation>;
  constructor(private relationService:RelationService,private personnageService:PersonnageService){}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["newRelation"]?.currentValue != changes["newRelation"]?.previousValue){
      this.personnageService.show(this.newRelation.personnage_id).subscribe({
        next:(personnage:Personnage)=>{
          personnage.pivot = this.newRelation;
          this.entourages?.push(personnage);
        }
      })
    }

    if(changes["updatedRelation"]?.currentValue != changes["updatedRelation"]?.previousValue){
      this.entourages = this.entourages?.map((entourage:Personnage):Personnage=>{
        if(entourage.pivot?.id == this.updatedRelation.id){
          entourage.pivot = this.updatedRelation;
        }
        return entourage;
      });
    }
  }
  update(relation?:Relation):void{
    if(relation){
      this.updateEvent.emit(relation);
    }
  }
  destroy(id?:number):void{
    if(id){
      this.relationService.destroy(id).subscribe({
          next:()=>{
            this.entourages = this.entourages?.filter((entourage:Personnage)=>{
              return entourage.pivot?.id != id;
            });
            this.showMessage("CorpsMessagePersonnage","succes","Relation supprimée !");
          },error:()=>{
            this.showMessage("CorpsMessagePersonnage","echec","Suppression échouée !");
          }
      });
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
