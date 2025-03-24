import { Component,Input,OnChanges,OnInit,SimpleChanges} from '@angular/core';
import { Personnage } from 'src/app/models/Personnage/personnage';
import { PersonnageService } from 'src/app/services/Personnage/personnage.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-tab-personnage',
  templateUrl: './tab-personnage.component.html',
  styleUrls: ['./tab-personnage.component.css']
})
export class TabPersonnageComponent implements OnInit,OnChanges{
  public _personnages$!:Observable<Personnage[]>;
  @Input() newPersonnage!:Personnage;
  @Input() action:string ="";
  constructor(private service:PersonnageService){}
  ngOnInit(): void {
    this._personnages$ = this.service.index();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Mise à jour de la liste / tableau
    if(changes["newPersonnage"]?.currentValue != changes["newPersonnage"]?.previousValue){
      this._personnages$ = this._personnages$.pipe(map(personnages => {
        personnages.push(this.newPersonnage);
        return personnages;
      }),
      map(personnages =>{
        personnages.pop();
        return personnages;
      }));
    }
  }

  destroy(id:number):void{
    this.service.destroy(id).subscribe({
      next:()=>{
        this._personnages$ = this._personnages$.pipe(map(personnages =>{
          personnages.filter((personnage:Personnage)=>{
            return personnage.id != id;
          });
          return personnages;
        }));
        this.showMessage("CorpsMessagePersonnage","succes","Personnage supprimé !");
      },
      error:()=>{
        this.showMessage("CorpsMessagePersonnage","echec","Suppression échoué !");
      }
    });
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
