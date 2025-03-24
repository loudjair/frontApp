import { Component,EventEmitter,Input,OnChanges,OnInit, Output, SimpleChanges} from '@angular/core';
import { map, Observable } from 'rxjs';
import { Livre } from 'src/app/models/Livre/livre';
import { LivreService } from 'src/app/services/Livre/livre.service';

@Component({
  selector: 'app-tab-livre',
  templateUrl: './tab-livre.component.html',
  styleUrls: ['./tab-livre.component.css']
})
export class TabLivreComponent implements OnInit,OnChanges{

  @Input() newLivre!:Livre;

  public livres$!:Observable<Livre[]>;
  constructor(private service:LivreService){}
  
  ngOnInit(): void {
    this.livres$ = this.service.index();
  }

  ngOnChanges(changes:SimpleChanges):void{
    //Mise à jour de la liste / tableau
    if(changes["newLivre"]?.currentValue != changes["newLivre"]?.previousValue){
      this.livres$ = this.livres$.pipe(
        map(livres => {
          livres.push(this.newLivre);
          return livres
      }),
      map(livres => {
        livres.pop();
        return livres;
      })
      );
    }
  }

  destroy(id:number):void{
    this.service.destroy(id).subscribe({
      next:()=>{
        this.livres$ = this.livres$.pipe(map(livres =>{
          livres.filter((livre)=>{
            if(livre.id == id){
              return false;
            }
            return true;
          });
          return livres;
        }));
        this.showMessage("CorpsMessageLivre","succes","Livre supprimé !");
      },
      error:()=>{
        this.showMessage("CorpsMessageLivre","echec","Suppression échoué !");
      }
    });
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
