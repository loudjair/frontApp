import { Component,OnChanges,SimpleChanges,Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonnageRole } from 'src/app/models/PersonnageRole/personnage-role';
import { PersonnageRoleService } from 'src/app/services/PersonnageRole/personnage-role.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LivreService } from 'src/app/services/Livre/livre.service';
import { RoleService } from 'src/app/services/Role/role.service';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/models/Livre/livre';
import { Role } from 'src/app/models/Role/role';

@Component({
  selector: 'app-form-ajouter-modifier-personnage-role',
  templateUrl: './form-ajouter-modifier-personnage-role.component.html',
  styleUrls: ['./form-ajouter-modifier-personnage-role.component.css']
})
export class FormAjouterModifierPersonnageRoleComponent implements OnChanges,OnInit{

  @Input() typeAction:string = "";
  @Input() updatePersonnageRole!:PersonnageRole;
  @Input() personnage_id:number = 0;
  @Output() storeEvent = new EventEmitter<PersonnageRole>();
  @Output() updateEvent = new EventEmitter<PersonnageRole>();
  public _livres$!:Observable<Livre[]>;
  public _roles$!:Observable<Role[]>;
  personnageRoleForm = this.formBuilder.group({
    versets:this.formBuilder.group({
      debut:new FormControl(0),
      fin:new FormControl(0)
    }),
    id:new FormControl(0),
    personnage_id:this.personnage_id,
    role_id:new FormControl(0),
    livre_id:new FormControl(0),
    chapitre:new FormControl(0),
    description:new FormControl('')
  });
  constructor(private formBuilder:FormBuilder,
    private livreService:LivreService,
    private roleService:RoleService,
    private personnageRoleService:PersonnageRoleService
  ){}

  ngOnInit(): void {
    this._livres$ = this.livreService.index();
    this._roles$ = this.roleService.index();

    if("update" == this.typeAction){
      this.personnageRoleForm.get('role_id')?.disable();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.typeAction=='update' && changes["updatePersonnageRole"]?.currentValue != changes["updatePersonnageRole"]?.previousValue){
      this.personnageRoleForm.patchValue({
        id:this.updatePersonnageRole.id,
        personnage_id:this.updatePersonnageRole.personnage_id,
        role_id:this.updatePersonnageRole.role_id,
        livre_id:this.updatePersonnageRole.livre_id,
        chapitre:this.updatePersonnageRole.chapitre,
        versets:this.updatePersonnageRole.versets,
        description:this.updatePersonnageRole.description
      });
    }
    if(this.typeAction=='store' && changes["personnage_id"]?.currentValue != changes["personnage_id"]?.previousValue){
      this.personnageRoleForm.patchValue({
        personnage_id:this.personnage_id
      });
    }
  }

  update():void{
    this.personnageRoleService.update(this.personnageRoleForm.value).subscribe({
      next:(personnageRole:PersonnageRole) =>{
        //this.showMessage("CorpsMessagePersonnage","succes","Role du personnage modifié !");
        this.personnageRoleForm.reset();
        this.updateEvent.emit(personnageRole);
      },
      error:()=>{
        this.showMessage("CorpsMessagePersonnage","echec","La modification a échoué !");
      }
    });

  }

  store():void{
    this.personnageRoleForm.patchValue({
      personnage_id:this.personnage_id
    });
    this.personnageRoleService.store(this.personnageRoleForm.value).subscribe({
      next:(personnageRole:PersonnageRole)=>{
        this.storeEvent.emit(personnageRole);
        //this.showMessage("CorpsMessagePersonnage","succes","Nouveau role ajouté !");
        this.personnageRoleForm.reset();
      },
      error:()=>{
        console.error();
        //this.showMessage("CorpsMessagePersonnage","echec","L'ajout a échoué !");
      }
    });
  }

  action():void{
    if("update" == this.typeAction){
      this.update();
    }
    if("store" == this.typeAction){
      this.store();
    }
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
