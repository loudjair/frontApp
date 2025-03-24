import { Component,Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { PersonnageRole } from 'src/app/models/PersonnageRole/personnage-role';
import { Role } from 'src/app/models/Role/role';
import { PersonnageRoleService } from 'src/app/services/PersonnageRole/personnage-role.service';

@Component({
  selector: 'app-tab-personnage-role',
  templateUrl: './tab-personnage-role.component.html',
  styleUrls: ['./tab-personnage-role.component.css']
})
export class TabPersonnageRoleComponent implements OnChanges{ 
  //Affichage des personnages du role passé en entré
  @Input() roles?:Role[];
  @Input() updatedRole!:PersonnageRole;
  @Input() newRole!:PersonnageRole;
  @Output() updateEvent = new EventEmitter<PersonnageRole>;
  constructor(private service:PersonnageRoleService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["updatedRole"]?.currentValue != changes["updatedRole"]?.previousValue){
      this.roles = this.roles?.map((role:Role):Role=>{
        if(role.pivot?.id == this.updatedRole.id){
          role.pivot = this.updatedRole;
        }
        return role;
      });
    }
    if(changes["newRole"]?.currentValue != changes["newRole"]?.previousValue){
      this.roles?.push({
        id:this.newRole.role_id,
        role:this.newRole.role||"",
        description:"",
        created_at:new Date(),
        updated_at:new Date(),
        pivot:this.newRole
      });
    }
  }

  update(personnageRole:PersonnageRole):void{
    this.updateEvent.emit(personnageRole);
  }

  destroy(personnageRole:PersonnageRole):void{
    this.service.destroy(personnageRole.id).subscribe({
      next:()=>{
        this.roles = this.roles?.filter((role:Role)=>{
          return role.id != personnageRole.role_id;
        });
        this.showMessage("CorpsMessagePersonnage","succes","Role supprimé !");
      },
      error:()=>{
        this.showMessage("CorpsMessagePersonnage","echec","Suppression échoué !");
      }
    })
  }
  showMessage(id:string,classe:string,contenu:string):void{
    const corps = document.getElementById(id);
    const message = document.getElementById("messagePersonnage");
    if(corps != null){
      corps.classList.toggle("hide-message");
      corps.classList.toggle(classe);
      if(message){
        message.innerText = contenu;
      }
    }
  }
}
