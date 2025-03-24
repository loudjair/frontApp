import { Pipe, PipeTransform } from '@angular/core';
import { Livre } from 'src/app/models/Livre/livre';

@Pipe({
  name: 'testament'
})
export class TestamentPipe implements PipeTransform {

  transform(value: Livre[], testament: string): Livre[] {
    return value.filter((livre:Livre)=>{
      return livre.testament == testament;
    });
  }

}
