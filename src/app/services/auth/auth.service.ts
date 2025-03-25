import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from 'src/app/models/Token/token';
import { User } from 'src/app/models/User/user';
import { URL } from 'src/assets/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user!:User;
  constructor(private http:HttpClient) { }
  initHeaderAuthorization():HttpHeaders{
    return new HttpHeaders({'Authorization':`Bearer ${localStorage.getItem('token')}`});
  }
  connexion(id:any):Observable<Token>{
    return this.http.post<Token>(URL.urlApi+"/login",{email:id.email,password:id.password},{withCredentials:true});
  }
  
  deconnexion():Observable<any>{
    const headers = this.initHeaderAuthorization();
    return this.http.post<any>(URL.urlApi+"/logout",{},{withCredentials:true,headers:headers});
  }

  inscription(user:any):Observable<Token>{
    user.role = "utilisateur";
    return this.http.post<Token>(URL.urlApi+"/register",{new:user},{withCredentials:true});
  }

  getUser():Observable<User>{
    const headers = this.initHeaderAuthorization();
    return this.http.get<User>(URL.urlApi+"/user",{withCredentials:true,headers:headers});
  }

  isConnecte():boolean{
    return localStorage.getItem("token") != null;
  }

  initUser():void{
    if(this.user){}
    else{
      this.getUser().subscribe({
        next:(user:User)=>{
          this.user = user;
        }
      });
    }
  }
  getUser2():User{
    return this.user;
  }
}
