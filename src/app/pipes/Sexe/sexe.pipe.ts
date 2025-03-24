import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexe'
})
export class SexePipe implements PipeTransform {

  transform(sexe?: string): string {
    if(sexe){
      return sexe == 'M' ? 'Sexe masculin' : 'Sexe feminin';
    }else{
      return "Sexe inconnu";
    }
  }

}
