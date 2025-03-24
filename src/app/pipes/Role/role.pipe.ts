import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(role: string, niveau: number): string {
    let chemin_img:string = "";
    let i:number = 0;
    for(i=0;i<niveau;i++){
      chemin_img += "..\\";
    } 
    chemin_img +="assets\\";
    if("Roi" == role || "Reine" == role){
      chemin_img += "crown.png";
    }
    else if("Prêtre" == role || "Prophète" == role){
      chemin_img += "priest.png";
    }
    else if("Berger" == role){
      chemin_img += "shepherd.png";
    }
    else if("Soldat" == role || "Guerrier" == role){
      chemin_img += "sword.png";
    }
    return chemin_img;
  }

}
