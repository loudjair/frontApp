import { Component,OnInit} from '@angular/core';
import { Personnage } from 'src/app/models/Personnage/personnage';
import { PersonnageService } from 'src/app/services/Personnage/personnage.service';
import { Observable} from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Role } from 'src/app/models/Role/role';
import { RoleService } from 'src/app/services/Role/role.service';

@Component({
  selector: 'app-page-principale-personnage',
  templateUrl: './page-principale-personnage.component.html',
  styleUrls: ['./page-principale-personnage.component.css']
})
export class PagePrincipalePersonnageComponent implements OnInit{

  public typeAction:string="";
  public personnages$!:Observable<Personnage[]>;
  public data$!:Observable<Personnage[]>;
  public roles$!:Observable<Role[]>;
  public filtreOldPerso:{nom?:string|null,sexe?:string|null,role?:string|null} = {nom:"",sexe:"",role:""};
  public filtreNewPerso:{nom?:string|null,sexe?:string|null,role?:string|null} = {nom:"",sexe:"",role:""};

  public oldTestamentPersoForm = this.formBuilder.group({
    nom:[""],
    sexe:[""],
    role:[""]
  }); 
  public newTestamentPersoForm = this.formBuilder.group({
    nom:[""],
    sexe:[""],
    role:[""]
  });
  constructor(private service:PersonnageService,private formBuilder:FormBuilder,private serviceRole:RoleService){}
  
  ngOnInit(): void {
    this.roles$ = this.serviceRole.index();
    this.data$ = this.service.index();
    this.personnages$ = this.data$;
  }

  action(formulaire:string):void{
    this.personnages$ = this.data$;
    if("ancien" == formulaire){
      this.filtreOldPerso = this.oldTestamentPersoForm.value;
    }
    else{
      this.filtreNewPerso = this.newTestamentPersoForm.value;
    }

  }

  getImage(sexe?:string):string{
    let src:string = "../../../../../assets/images/";
    return sexe == 'F' ? src+'woman.jpg' : src+'man.jpg';
  }

}
