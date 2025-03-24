import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CompteService } from 'src/app/services/compte/compte.service';

@Component({
  selector: 'app-page-gestion-compte',
  templateUrl: './page-gestion-compte.component.html',
  styleUrls: ['./page-gestion-compte.component.css']
})
export class PageGestionCompteComponent implements OnInit{
  public msg:string="";
  
  public nomForm = this.formBuilder.group({
    nom:new FormControl('',Validators.required)
  });

  public emailForm = this.formBuilder.group({
    email:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  public passwordForm = this.formBuilder.group({
    old_password:new FormControl('',[Validators.required,Validators.minLength(4)]),
    new_password:new FormControl('',[Validators.required,Validators.minLength(4)]),
    confirm_password:new FormControl('',[Validators.required,Validators.minLength(4)])
  });


  public user!:User;

  constructor(private service:CompteService,private authService:AuthService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.authService.getUser().subscribe({
      next:(user)=>{
        this.user = user;
      }
    });
  }

  modifNom():void{
    if(this.nomForm.valid){
      this.service.update(this.nomForm.value).subscribe({
        next:(user)=>{
          this.user = user;
          this.msg ="Nom modifié";
        },
        error:()=>{
          this.msg ="Echec de la modification";
        }
      })
    }
  }

  modifEmail():void{
    if(this.emailForm.valid){
      this.service.update(this.emailForm.value).subscribe({
        next:(user)=>{
          this.user = user;
          this.msg ="Email modifié";
        },
        error:()=>{
          this.msg ="Echec de la modification";
        }
      })
    }
  }
  
  modifPassword():void{
    if(this.passwordForm.valid){
      if(this.passwordForm.value.new_password == this.passwordForm.value.confirm_password){
        this.service.update(this.passwordForm.value,"password").subscribe({
          next:(user)=>{
            this.user = user;
            this.msg ="Mot de passe modifié";
          },
          error:()=>{
            this.msg ="Echec de la modification";
          }
        })
      }
    }
  }
  fermer():void{
    this.msg ="";
  }
}
