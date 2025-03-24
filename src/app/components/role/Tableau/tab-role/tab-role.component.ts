import { Component,Input,OnChanges,OnInit, SimpleChanges} from '@angular/core';
import { RoleService } from 'src/app/services/Role/role.service';
import { Role } from 'src/app/models/Role/role';
import { map, Observable} from 'rxjs';

@Component({
  selector: 'app-tab-role',
  templateUrl: './tab-role.component.html',
  styleUrls: ['./tab-role.component.css']
})
export class TabRoleComponent implements OnInit,OnChanges{
  @Input() newRole!:Role;
  public roles$!:Observable<Role[]>;
  constructor(private service:RoleService){}

  ngOnInit(): void {
    this.roles$ = this.service.index();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Mise à jour de la liste / tableau
    if(changes["newRole"]?.currentValue != changes["newRole"]?.previousValue){
      /* Le 2nd opérateur permet de supprimer le role rajouté en 2nd fois */
      this.roles$ = this.roles$.pipe(
        map(roles => { roles.push(this.newRole);return roles;}),
        map(roles => { roles.pop() ; return roles; } ));
    }
  }

  destroy(role_id:number):void{
    this.service.destroy(role_id).subscribe({
      next:()=>{
        this.roles$ = this.roles$.pipe(map(roles => roles.filter((role:Role)=>{
          return role.id != role_id;
        })));
        this.showMessage('CorpsMessageRole',"succes","Suppression réussit");
      },
      error:()=>{
        this.showMessage('CorpsMessageRole',"echec","Suppression échoué !");
      }
    });
  }

  showMessage(id:string,classe:string,contenu:string):void{
    const corps = document.getElementById(id);
    const message = document.getElementById("messageRole");
    if(corps != null){
      corps.classList.toggle("hide-message");
      corps.classList.toggle(classe);
      if(message){
        message.innerText = contenu;
      }
    }
  }

}
