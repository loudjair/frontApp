import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Role } from 'src/app/models/Role/role';

@Component({
  selector: 'app-gerer-role',
  templateUrl: './gerer-role.component.html',
  styleUrls: ['./gerer-role.component.css']
})
export class GererRoleComponent {
  
  public newRole!:Role;
  constructor(private location:Location){}

  store(role:Role):void{
    this.newRole = role;
  }
  retour():void{
    this.location.back();
  }

}