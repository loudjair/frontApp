import { Component,Input,OnChanges,OnInit, SimpleChanges} from '@angular/core';
import { ThematiqueService } from 'src/app/services/Thematique/thematique.service';
import { Thematique } from 'src/app/models/Thematique/thematique';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-tab-thematique',
  templateUrl: './tab-thematique.component.html',
  styleUrls: ['./tab-thematique.component.css']
})
export class TabThematiqueComponent implements OnInit,OnChanges{
  public thematiques$!:Observable<Thematique[]>;
  @Input() newThematique!:Thematique;
  @Input() action:string ="";
  constructor(private service:ThematiqueService){}
  ngOnInit(): void {
    //Conversion des versets en format JSON de chaque thematique
    this.thematiques$ = this.service.index();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Mise à jour de la liste / tableau
    if(changes["newThematique"]?.currentValue != changes["newThematique"]?.previousValue){
        this.thematiques$ = this.thematiques$.pipe(map(thematiques =>{
          thematiques.push(this.newThematique);
          return thematiques;
        }),
        map(thematiques => {
          thematiques.pop();
          return thematiques;
        })
      );
    }   
  }
  destroy(id:number):void{
    this.service.destroy(id).subscribe({
      next:()=>{
        this.thematiques$ = this.thematiques$.pipe(map(thematiques => {
          thematiques.filter((thematique)=>{
            return !(thematique.id == id);
          });
          return thematiques;
        }));
        this.showMessage("CorpsMessageThematique","succes","Thematique supprimé !");
      },
      error:()=>{
        this.showMessage("CorpsMessageThematique","echec","Suppression échoué !");
      }
    });
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
