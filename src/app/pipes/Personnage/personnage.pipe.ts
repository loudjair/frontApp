import { Pipe, PipeTransform } from '@angular/core';
import { Personnage } from 'src/app/models/Personnage/personnage';

@Pipe({
  name: 'personnage'
})
export class PersonnagePipe implements PipeTransform {

  transform(value: Personnage[]|null, testament: string,form?:{nom?:string|null,sexe?:string|null,role?:string|null}): Personnage[]|null {
    if(value){
      return value?.filter((personnage:Personnage)=>{
        if(form){
          if(form.sexe && form.sexe != "" && personnage.sexe != form.sexe){
            return false;
          }
          if(form.nom && form.nom != "" && personnage.nom.indexOf(form.nom)<0){
            return false;
          }
          
          if(form.role && form.role != "" && personnage.roles.findIndex((role)=> role.role == form.role)<0){
            return false;
          }
        }
        return personnage.testament == testament
      });
    }
    return value;
  }

}
