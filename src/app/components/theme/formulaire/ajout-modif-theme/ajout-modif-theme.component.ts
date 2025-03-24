import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Thematique } from 'src/app/models/Thematique/thematique';
import { Theme } from 'src/app/models/Theme/theme';
import { ThematiqueService } from 'src/app/services/Thematique/thematique.service';
import { ThemeService } from 'src/app/services/Theme/theme.service';

@Component({
  selector: 'app-ajout-modif-theme',
  templateUrl: './ajout-modif-theme.component.html',
  styleUrls: ['./ajout-modif-theme.component.css']
})
export class AjoutModifThemeComponent implements OnInit,OnChanges{
  @Input() typeAction:string = "";
  @Input() theme!:Theme;
  @Output() storeEvent = new EventEmitter<Theme>();
  @Output() updateEvent = new EventEmitter<Observable<Theme>>();

  public images:string[] = ["","img1","img2","img3","img4","img5","img6","img7"];

  public thematiques$!:Observable<Thematique[]>;

  public themeForm = this.formBuilder.group({
    id:0,
    theme:[""],
    description:[""],
    image:[""],
    thematique_id:0
  });

  constructor(private formBuilder:FormBuilder,private themeService:ThemeService,private thematiqueService:ThematiqueService){
  }
  ngOnInit(): void {
    this.thematiques$ = this.thematiqueService.index();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if("update" == this.typeAction && changes["theme"].currentValue != changes["theme"].previousValue){
      this.themeForm.patchValue({
        id:this.theme.id,
        theme:this.theme.theme,
        description:this.theme.description,
        image:this.theme.image,
        thematique_id:this.theme.thematique_id
      });
    }
  }
  action():void{
    if("update" == this.typeAction){
      this.update()
    }
    if("store" == this.typeAction){
      this.store()
    }
  }

  store():void{
    this.themeService.store(this.themeForm.value).subscribe({
      next:(theme:Theme)=>{
        this.storeEvent.emit(theme);
        this.showMessage("CorpsMessageTheme","succes","Nouveau theme ajouté !");
        this.themeForm.reset();
      },
      error:()=>{
        this.showMessage("CorpsMessageTheme","echec","L'ajout a échoué !");
      }
    });
  }

  update():void{
    this.updateEvent.emit(this.themeService.update(this.themeForm.value));
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
