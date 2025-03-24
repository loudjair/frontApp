import { Pipe, PipeTransform } from '@angular/core';
import { Evenement } from 'src/app/models/Evenement/evenement';

@Pipe({
  name: 'evenement'
})
export class EvenementPipe implements PipeTransform {

  transform(value?:Evenement,evenement?:string,type?:string): string {
    let resultat:string="";
    let localite:string="";
    if(value){
      if("naissance" == evenement){
        if("date" == type){
          if(value.date != null ){
            resultat += `Date de naissance: ${value.date} `;
          }
          else{
            resultat += "Date de naissance inconnue";
          }
        }
        else{
          resultat += " Lieu de naissance:";
          if(value.localite?.lieu != null){
            localite += `${value.localite.lieu}, `;
          }
          if(value.localite?.ville != null){
            localite +=  `${value.localite.ville}, `;
          }
          if(value.localite?.region != null){
            localite += `${value.localite.region}, `;
          }
          if(value.localite?.pays != null){
            localite += `${value.localite.pays}`;
          }
          if(localite.length<1){
            resultat +="Inconnue";
          }else{
            resultat += localite;
          }
        }
      }
      else{
        if("date" == type){
          if(value.date != null ){
            resultat += `Date de décès: ${value.date} `;
          }
          else{
            resultat += "Date de décès inconnue";
          }
        }
        else{
          resultat += " Lieu de décès:";
          if(value.localite?.lieu != null){
            localite += `${value.localite.lieu}, `;
          }
          if(value.localite?.ville != null){
            localite +=  `${value.localite.ville}, `;
          }
          if(value.localite?.region != null){
            localite += `${value.localite.region}, `;
          }
          if(value.localite?.pays != null){
            localite += `${value.localite.pays}`;
          }
          if(localite.length<1){
            resultat +="Inconnue";
          }else{
            resultat += localite;
          }
        }
      }
    }
    return resultat;
  }

}
