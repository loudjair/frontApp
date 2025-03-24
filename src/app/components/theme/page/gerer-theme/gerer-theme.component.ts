import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Theme } from 'src/app/models/Theme/theme';

@Component({
  selector: 'app-gerer-theme',
  templateUrl: './gerer-theme.component.html',
  styleUrls: ['./gerer-theme.component.css']
})
export class GererThemeComponent {
  public newTheme!:Theme;
  public updatedTheme!:Theme;
  constructor(private location:Location){}

  store(theme:Theme):void{
    this.newTheme = theme;
  }
  retour():void{
    this.location.back();
  }
}
