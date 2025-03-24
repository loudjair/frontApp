import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Livre } from 'src/app/models/Livre/livre';
import { Personnage } from 'src/app/models/Personnage/personnage';
import { Relation } from 'src/app/models/Relation/relation';
import { LivreService } from 'src/app/services/Livre/livre.service';
import { PersonnageService } from 'src/app/services/Personnage/personnage.service';
import { RelationService } from 'src/app/services/Relation/relation.service';

@Component({
  selector: 'app-ajout-modif-relation',
  templateUrl: './ajout-modif-relation.component.html',
  styleUrls: ['./ajout-modif-relation.component.css']
})
export class AjoutModifRelationComponent implements OnChanges,OnInit{

  @Input() typeAction:string="";
  @Input() updateRelation!:Relation;
  @Input() personnageId:number = 0;
  @Output() storeEvent = new EventEmitter<Relation>();
  @Output() updateEvent = new EventEmitter<Relation>();

  public personnages$!:Observable<Personnage[]> ;
  public livres$!:Observable<Livre[]>;
  public relations!:string[];
  public relationForm = this.formBuilder.group({
    id:0,
    personnage:0,
    personnage_id:0,
    livre_id:0,
    chapitre:0,
    versets:this.formBuilder.group({
        debut:0,
        fin:0,
      }),
      description:[""],
      relation:'',
      type:''
    })

  constructor(
    private relationService:RelationService,
    private personnageService:PersonnageService,
    private livreService:LivreService,
    private formBuilder:FormBuilder){}
  ngOnInit(): void {
    //On filtre les personnages qui sont déjà en relation avec le personnage principale 
    this.personnages$ = this.personnageService.index().pipe(map((personnages:Personnage[])=>{
      return personnages.filter((personnage:Personnage)=>{
        return personnage.id != this.personnageId;
      });
    }));
    this.livres$ = this.livreService.index();
    this.relations = ["Epoux","Epouse","fils","fille","père","mère","frère","soeur","cousin","cousine","nièce","neveu","oncle","tante"];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if("update" == this.typeAction && changes["updateRelation"].currentValue != changes["updateRelation"].previousValue){
      this.relationForm.patchValue({
        id:this.updateRelation.id,
        personnage:this.updateRelation.personnage,
        personnage_id:this.updateRelation.personnage_id,
        livre_id:this.updateRelation.livre_id,
        chapitre:this.updateRelation.chapitre,
        versets:this.updateRelation.versets,
        description:this.updateRelation.description,
        relation:this.updateRelation.relation,
        type:this.updateRelation.type
      });
    }
    if("store" == this.typeAction && changes["personnageId"].currentValue != changes["personnageId"].previousValue){
      this.relationForm.patchValue({
        personnage:this.personnageId,
      });
    }
  }

  update():void{
    this.relationService.update(this.relationForm.value).subscribe({
      next:(relation:Relation) => {
        this.showMessage("CorpsMessagePersonnage","succes","Mise à jour de la relation réussie !");
        this.relationForm.reset();
        this.updateEvent.emit(relation);
      },
      error:()=>{
        this.showMessage("CorpsMessagePersonnage","echec","La modification a échoué !");
      }
    });
  }

  store():void{
    this.relationForm.patchValue({
      personnage:this.personnageId,
    });
    this.relationService.store(this.relationForm.value).subscribe({
      next:(relation:Relation) =>{
        this.showMessage("CorpsMessagePersonnage","succes","Nouvelle relation ajoutée !");
        this.relationForm.reset();
        this.storeEvent.emit(relation);
      },
      error:()=>{
        this.showMessage("CorpsMessagePersonnage","echec","L'ajout a échoué !");
      }
    });
  }

  action():void{
    if("update" == this.typeAction){
      this.update();
    }
    if("store" == this.typeAction){
      this.store();
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
