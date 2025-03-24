import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Personnage } from 'src/app/models/Personnage/personnage';
import { PersonnageRole } from 'src/app/models/PersonnageRole/personnage-role';
import { Relation } from 'src/app/models/Relation/relation';
import { PersonnageService } from 'src/app/services/Personnage/personnage.service';

@Component({
  selector: 'app-gestion-personnage',
  templateUrl: './gestion-personnage.component.html',
  styleUrls: ['./gestion-personnage.component.css']
})
export class GestionPersonnageComponent implements OnInit{
  
    public classes = {
      generale:{tabcontent:true,displayNone:true,displayFlex:false},
      entourage:{tabcontent:true,displayNone:true,displayFlex:false},
      role:{tabcontent:true,displayNone:true,displayFlex:false}
  };

  public tablinksClasses = {
    generale:{tablink:true,tablinkActive:false},
    entourage:{tablink:true,tablinkActive:false},
    role:{tablink:true,tablinkActive:false}
  };
  
  public personnage$!:Observable<Personnage>;

  public relation!:Relation;
  public newRelation!:Relation;
  public relationUpdated!:Relation;

  public typeActionRelation:string="store";
  public typeActionPersoRole:string="store";

  public storedRole!:PersonnageRole;
  public role!:PersonnageRole;
  public updatedrole!:PersonnageRole;

  public parametres!:UrlSegment[];


  constructor(private service:PersonnageService,private route:ActivatedRoute,private location:Location){}
  ngOnInit(): void {
    this.parametres = this.route.snapshot.url;
    //Récupération de l'identifiant du personnage
    const routeParams = this.route.snapshot.paramMap;

    const personnageId = Number(routeParams.get('id'));
    
    this.personnage$ = this.service.show(personnageId);
  }
  image(sexe?:string):string{
    let src:string = "assets/images/";
    return sexe == 'F' ? src+'woman.jpg' : src+'man.jpg';
  }
  activerOnglet(onglet:string):void{
    this.initOnglet();
    
    if(onglet=="generale"){
      this.classes.generale.displayNone = !this.classes.generale.displayNone;
      this.classes.generale.displayFlex = !this.classes.generale.displayFlex;
      this.tablinksClasses.generale.tablink = false;
      this.tablinksClasses.generale.tablinkActive = true;
    }
    else if(onglet=="entourage"){
      this.classes.entourage.displayNone = !this.classes.entourage.displayNone;
      this.classes.entourage.displayFlex = !this.classes.entourage.displayFlex;
      this.tablinksClasses.entourage.tablink = false;
      this.tablinksClasses.entourage.tablinkActive = true;
    }
    else{
      this.classes.role.displayNone = !this.classes.role.displayNone;
      this.classes.role.displayFlex = !this.classes.role.displayFlex;
      this.tablinksClasses.role.tablink = false;
      this.tablinksClasses.role.tablinkActive = true;
    }
  }

  initOnglet():void{
    this.classes = {
      generale: {tabcontent:true,displayNone:true,displayFlex:false},
      entourage:{tabcontent:true,displayNone:true,displayFlex:false},
      role:{tabcontent:true,displayNone:true,displayFlex:false}
    };

    this.tablinksClasses = {
      generale:{tablink:true,tablinkActive:false},
      entourage:{tablink:true,tablinkActive:false},
      role:{tablink:true,tablinkActive:false}
    };
  }
  
  update(personnage$:Observable<Personnage>):void{
    this.personnage$ = personnage$;
  }
  updateRelation(relation:Relation):void{ 
    this.relation = relation;
    this.typeActionRelation = "update";
  }
  updatedRelation(relation:Relation):void{
    this.relationUpdated = relation;
    this.typeActionRelation = "store";
  }
  storeRelation(relation:Relation):void{
    this.newRelation = relation;
    this.typeActionRelation ='store';
  }
  storeRole(role:PersonnageRole):void{
    this.storedRole = role;
    this.typeActionPersoRole ='store';
  }
  updatedRole(role:PersonnageRole):void{
    this.updatedrole = role;
    this.typeActionPersoRole = "store";
  }
  updateRole(role:PersonnageRole):void{
    this.role = role;
    this.typeActionPersoRole = "update";
  }
  retour():void{
    this.location.back();
  }
}
