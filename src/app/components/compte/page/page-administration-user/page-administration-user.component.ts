import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/User/user';
import { CompteService } from 'src/app/services/compte/compte.service';

@Component({
  selector: 'app-page-administration-user',
  templateUrl: './page-administration-user.component.html',
  styleUrls: ['./page-administration-user.component.css']
})
export class PageAdministrationUserComponent implements OnInit{
  public users$!:Observable<User[]>;
  public _utilisateur!:User;
  public gestion_class:Record<string,boolean> = {'display-none' : true};
  public roleForm = this.formBuilder.group({
    id:0,
    role:new FormControl('',Validators.required)
  });
  public msg:string="";
  constructor(private service:CompteService,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.users$ = this.service.index();
  }

  gestion(utilisateur:User):void{
    this._utilisateur = utilisateur;
    this.roleForm.patchValue({
      id:utilisateur.id,
      role:utilisateur.role
    });
    if(this.gestion_class["display-none"]){
      this.gestion_class["display-none"] = false;
    }
  }

  quitter():void{
    this.gestion_class["display-none"] = true;
  }

  modifier():void{
    if(this.roleForm.valid){
      this.service.update(this.roleForm.value,"role").subscribe({
        next:(newUser)=> {
          this._utilisateur = newUser;
          this.msg = "utilisateur modifié";
      },error:()=>{
        this.msg = "Echec de la modification";
      }
    });
    }
  }

  supprimer():void{
    this.service.destroy(this._utilisateur.id).subscribe({
      next:()=>{
        this.miseAJourListe(this._utilisateur.id);
        this.msg = "Utilisateur suppprimé";
      },
      error:()=>{},
      complete:()=>{}});
  }


  miseAJourListe(userId:number):void{
    let filtre = (utilisateur:User)=>{
      return utilisateur.id != userId;
    };
    this.users$.pipe(map(tab => tab.filter(filtre)));
  }
  fermer():void{
    this.msg ="";
  }
}
