import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/Role/role';
import { RoleService } from 'src/app/services/Role/role.service';

@Component({
  selector: 'app-gestion-role',
  templateUrl: './gestion-role.component.html',
  styleUrls: ['./gestion-role.component.css']
})
export class GestionRoleComponent implements OnInit{
  public role$!:Observable<Role>;
  public parametres!:UrlSegment[];
  constructor(private service:RoleService,private route:ActivatedRoute,private location:Location){}
  ngOnInit(): void {
    this.parametres = this.route.snapshot.url;
    //Récupération de l'identifiant du thematique
    const routeParams = this.route.snapshot.paramMap;

    const roleId = Number(routeParams.get('id'));
    
    this.role$ = this.service.show(roleId);
  }
  updatedRole(role$:Observable<Role>):void{
    this.role$ = role$;
  }

  retour():void{
    this.location.back();
  }
}
