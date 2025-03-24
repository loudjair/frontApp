import { Pipe, PipeTransform } from '@angular/core';
import { Livre } from 'src/app/models/Livre/livre';

@Pipe({
  name: 'livre'
})
export class LivrePipe implements PipeTransform {

  transform(value: Livre[], titre:string): Livre[] {
    return value.filter((livre:Livre)=>{
      return livre.titre == titre;
    });
  }

}
