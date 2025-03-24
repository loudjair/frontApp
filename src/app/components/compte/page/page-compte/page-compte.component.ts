import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/User/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-page-compte',
  templateUrl: './page-compte.component.html',
  styleUrls: ['./page-compte.component.css']
})
export class PageCompteComponent implements OnInit{

  public user$!:Observable<User>;
  constructor(private authService:AuthService,private router:Router){
  }
  ngOnInit(): void {
    this.user$ = this.authService.getUser();
  }
  deconnexion():void{
    this.authService.deconnexion().subscribe({
      next:()=>{
        this.user$ = of();
        localStorage.removeItem('token');
        this.router.navigate(['/compte/login']);
      }
    });
  }
}
