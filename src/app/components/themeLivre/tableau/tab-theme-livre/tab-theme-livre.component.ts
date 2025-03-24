import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Livre } from 'src/app/models/Livre/livre';
import { ThemeLivre } from 'src/app/models/ThemeLivre/theme-livre';
import { LivreService } from 'src/app/services/Livre/livre.service';
import { ThemeLivreService } from 'src/app/services/ThemeLivre/theme-livre.service';

@Component({
  selector: 'app-tab-theme-livre',
  templateUrl: './tab-theme-livre.component.html',
  styleUrls: ['./tab-theme-livre.component.css']
})
export class TabThemeLivreComponent implements OnChanges{
  @Input() passages?:Livre[];
  @Input() newPassage!:ThemeLivre;
  @Input() updatePassage!:ThemeLivre;
  @Output() updateEvent = new EventEmitter<ThemeLivre>();

  constructor(private themeLivreService:ThemeLivreService,private livreService:LivreService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["newPassage"]?.previousValue != changes["newPassage"]?.currentValue){
      this.livreService.show(this.newPassage.livre_id).subscribe({
        next:(livre:Livre)=>{
          livre.pivot = this.newPassage;
          this.passages?.push(livre);
        }
      })
    }
    if(changes["updatePassage"]?.previousValue != changes["updatePassage"]?.currentValue){
      this.passages = this.passages?.map((passage:Livre)=>{
        //On retrouve le passage biblique
        if(passage.pivot?.id == this.updatePassage.id){
          //Si le passage n'a pas changé, on affecte les données à jour
          if(passage.id == this.updatePassage.livre_id){
            passage.pivot = this.updatePassage;
          }
          //Sinon on change le livre, ainsi que les passages à jour
          else{
            this.livreService.show(this.updatePassage.livre_id).subscribe({
              next:(value:Livre)=>{
                passage = value;
                passage.pivot = this.updatePassage;
              }
            });
          }
        }
        return passage;
      });
    }
  }

  update(passage:ThemeLivre):void{
    this.updateEvent.emit(passage);
  }

  destroy(id?:number):void{
    if(id){
      this.themeLivreService.destroy(id).subscribe({
        next:()=>{
          this.passages = this.passages?.filter((livre:Livre)=>{
            return livre.pivot?.id != id;
          });
          this.showMessage("CorpsMessageTheme","succes","Passage supprimé !");
        }
      })
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
