import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chemin'
})
export class CheminPipe implements PipeTransform {

  transform(parametre: string,entite:string): string {
    if(Number.isNaN(parseInt(parametre))){
      return parametre;
    }
    else{
      return entite;
    }
  }

}
