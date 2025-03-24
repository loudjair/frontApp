import { Component,Input, OnChanges, OnInit,SimpleChanges } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Theme } from 'src/app/models/Theme/theme';
import { ThemeService } from 'src/app/services/Theme/theme.service';

@Component({
  selector: 'app-tab-theme',
  templateUrl: './tab-theme.component.html',
  styleUrls: ['./tab-theme.component.css']
})
export class TabThemeComponent implements OnInit,OnChanges{
  public themes$!:Observable<Theme[]>;
  @Input() newTheme!:Theme;
  constructor(private themeService:ThemeService){}
  ngOnInit(): void {
    this.themes$ = this.themeService.index();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Mise à jour de la liste / tableau
    if(changes["newTheme"]?.currentValue != changes["newTheme"]?.previousValue){
        this.themes$ = this.themes$.pipe(map(themes =>{
          themes.push(this.newTheme);
          return themes;
        }),
        map(themes => {
          themes.pop();
          return themes;
        })
      );
    }   
  }
  destroy(id:number):void{
    this.themeService.destroy(id).subscribe({
      next:()=>{
        this.themes$ = this.themes$.pipe(map(themes => {
          themes.filter((theme)=>{
            return !(theme.id == id);
          });
          return themes;
        }));
        this.showMessage("CorpsMessageTheme","succes","Theme supprimé !");
      },
      error:()=>{
        this.showMessage("CorpsMessageTheme","echec","Suppression échoué !");
      }
    });
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
