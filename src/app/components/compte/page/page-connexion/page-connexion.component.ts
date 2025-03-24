import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token/token';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css']
})
export class PageConnexionComponent {
  public msg:string="";
  public connexionForm = this.formBuilder.group({
    email:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  });
  public inscriptionForm = this.formBuilder.group({
    nom:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    password:new FormControl("",[Validators.required,Validators.minLength(4)])

  });
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router){}
  
  connexion():void{
    if(this.connexionForm.valid){
      this.authService.connexion(this.connexionForm.value).subscribe({
        next:(token:Token)=>{
          if(token.plainTextToken != undefined){
            localStorage.setItem('token',token.plainTextToken);
            this.authService.initUser();
            this.router.navigate(['/compte']);
          }
          else{
            this.msg = "Identifiant ou mot de passe incorrect"
          }
        }
      });
    }
  }
  
  inscription():void{
    if(this.inscriptionForm.valid){
      this.authService.inscription(this.inscriptionForm.value).subscribe({
        next:(token:Token)=>{
          if(token.plainTextToken != undefined){
            localStorage.setItem('token',token.plainTextToken);
            this.authService.initUser();
            this.router.navigate(['/compte']);
          }
          else{
            this.msg = "Echec d'inscription"
          }
        },error:()=>{
          this.msg = "Echec d'inscription"
        }
      });
    }
  }
  fermer():void{
    this.msg ="";
  }
}
