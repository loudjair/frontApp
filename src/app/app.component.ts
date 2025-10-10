import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { filter, Observable, of } from 'rxjs';
import { User } from './models/User/user';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public classes:Record<string,boolean> = {'display-none' : true,'box-link':true};
  public user$!:Observable<User>;
  constructor(public router:Router,private authService:AuthService,private route:ActivatedRoute){
    router.events.pipe(
      filter((event)=> event instanceof NavigationEnd)
    )
    .subscribe({
      next:(e)=>{
        if(e instanceof NavigationEnd){
          if(e.url == '/'){
            this.classes["display-none"] = true;
          }
          else{
            this.classes["display-none"] = false
          }
        }
        if(authService.isConnecte()){
          this.user$ = authService.getUser();
          authService.initUser();
        }else{
          this.user$ = of();
        }
      }
    });
  }

  ngOnInit(): void {
    this.route.fragment.subscribe({
      next:(fragment)=>{
        if(fragment){
          this.navigateToFragment(fragment);
        }
      }
    });
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
  /* 
    Accès directe à un élément de la page, élément referencé avec l'attribut id
  */
  navigateToFragment(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({behavior:"smooth",block:"start"});
  }
}
