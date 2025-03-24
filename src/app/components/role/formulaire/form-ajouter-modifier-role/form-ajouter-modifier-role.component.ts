import { Component,EventEmitter,Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/Role/role';
import { RoleService } from 'src/app/services/Role/role.service';
@Component({
  selector: 'app-form-ajouter-modifier-role',
  templateUrl: './form-ajouter-modifier-role.component.html',
  styleUrls: ['./form-ajouter-modifier-role.component.css']
})
export class FormAjouterModifierRoleComponent implements OnChanges{
  @Input() typeAction:string="";
  @Input() updateRole!:Role;
  @Output() storeEvent = new EventEmitter<Role>();
  @Output() updateEvent = new EventEmitter<Observable<Role>>();

  public roleForm = this.formBuilder.group({
    id:0,
    role:[""],
    description:[""]
  });
  constructor(private service:RoleService, private formBuilder:FormBuilder){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["updateRole"]?.currentValue != changes["updateRole"]?.previousValue){
      this.roleForm.patchValue({
        id:this.updateRole.id,
        role:this.updateRole.role,
        description:this.updateRole.description
      });
    }
  }

  store():void{
    this.service.store(this.roleForm.value).subscribe({
      next:(role:Role)=>{
        this.storeEvent.emit(role);
        this.showMessage("CorpsMessageRole","succes","Nouveau role ajouté !");
        this.roleForm.reset();
      }
    });
  }

  update():void{
    this.updateEvent.emit(this.service.update(this.roleForm.value));
    this.roleForm.reset();
  }

  action():void{
    if( "update" == this.typeAction){
      this.update()
    }

    if( "store" == this.typeAction){
      this.store()
    }
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
