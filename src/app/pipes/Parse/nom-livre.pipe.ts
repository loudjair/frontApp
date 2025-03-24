import { Pipe, PipeTransform } from '@angular/core';
import { NomLivre } from 'src/assets/api';

@Pipe({
  name: 'nomLivre'
})
export class NomLivrePipe implements PipeTransform {

  transform(value: string): NomLivre {
    return value as NomLivre;
  }

}
