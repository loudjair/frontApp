import { Pipe, PipeTransform } from '@angular/core';
import { Personnage } from 'src/app/models/Personnage/personnage';

@Pipe({
  name: 'entourage'
})
export class EntouragePipe implements PipeTransform {

  transform(value: Personnage[],relation: string): Personnage[] {
    return value.filter((personnage:Personnage)=>{
      return personnage.pivot?.type == relation
    });
  }

}
