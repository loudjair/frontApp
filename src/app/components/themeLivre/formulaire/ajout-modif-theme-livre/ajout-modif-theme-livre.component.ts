import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/models/Livre/livre';
import { ThemeLivre } from 'src/app/models/ThemeLivre/theme-livre';
import { LivreService } from 'src/app/services/Livre/livre.service';
import { ThemeLivreService } from 'src/app/services/ThemeLivre/theme-livre.service';

@Component({
  selector: 'app-ajout-modif-theme-livre',
  templateUrl: './ajout-modif-theme-livre.component.html',
  styleUrls: ['./ajout-modif-theme-livre.component.css']
})
export class AjoutModifThemeLivreComponent implements OnInit,OnChanges{
  public livres$!:Observable<Livre[]>;

  @Input() typeAction:string="";
  @Input() themeLivre!:ThemeLivre;
  @Input() theme_id!:number;

  @Output() storeEvent = new EventEmitter<ThemeLivre>();
  @Output() updateEvent = new EventEmitter<ThemeLivre>();
  public themeLivreForm = this.formBuilder.group({
    id:0,
    theme_id:0,
    livre_id:0,
    chapitre:0,
    versets:this.formBuilder.group({
      debut:0,
      fin:0
    }),
    explications:[""],
    traduction:"",
    edition:""
  });
  constructor(private formBuilder:FormBuilder,private themeLivreService:ThemeLivreService,private livreService:LivreService){
  }
  ngOnInit(): void {
    this.livres$ = this.livreService.index();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if("update" == this.typeAction && changes["themeLivre"].currentValue != changes["themeLivre"].previousValue){
      this.themeLivreForm.patchValue({
        id:this.themeLivre.id,
        theme_id:this.themeLivre.theme_id,
        livre_id:this.themeLivre.livre_id,
        chapitre:this.themeLivre.chapitre,
        versets:this.themeLivre.versets,
        explications:this.themeLivre.explications,
        traduction:this.themeLivre.traduction,
        edition:this.themeLivre.edition
      });
    }
    if("store" == this.typeAction && changes["theme_id"].currentValue != changes["theme_id"].previousValue){
      this.themeLivreForm.patchValue({
        theme_id:this.theme_id
      });
    }
  }

  store():void{
    this.themeLivreForm.patchValue({
      theme_id:this.theme_id
    });
    this.themeLivreService.store(this.themeLivreForm.value).subscribe({
      next:(value:ThemeLivre)=>{
        this.storeEvent.emit(value);
        this.showMessage("CorpsMessageTheme","succes","Passage biblique ajouté !");
        this.themeLivreForm.reset();
      }
    });
  }

  update():void{
    this.themeLivreService.update(this.themeLivreForm.value).subscribe({
      next:(value:ThemeLivre)=>{
        this.updateEvent.emit(value);
        this.showMessage("CorpsMessageTheme","succes","Passage biblique modifié !");
        this.themeLivreForm.reset();
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
    const message = document.getElementById("messageTheme");
    if(corps != null){
      corps.classList.toggle("hide-message");
      corps.classList.toggle(classe);
      if(message){
        message.innerText = contenu;
      }
    }
  }
}
