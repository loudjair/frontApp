import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User/user';
import { URL } from 'src/assets/api';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  public _user!:User;
  private url:string = URL.urlApi+"/users";
  constructor(private http:HttpClient,private authService:AuthService) { }

  public index():Observable<User[]>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.get<User[]>(this.url,{headers:headers});
  }

  public store(new_user:any):Observable<User>{
    return this.http.post<User>(this.url,new_user);
  }

  public show(user_id_or_mail:number|string,option:string):Observable<User>{
    if("email" == option){
      return this.http.get<User>(this.url+`/${user_id_or_mail}`,{params:{option:"email"}});
    }
    return this.http.get<User>(this.url+`/${user_id_or_mail}`,{params:{option:"id"}});
  }

  public update(user:any,options?:string):Observable<User>{
    this.authService.initUser();
    const headers = this.authService.initHeaderAuthorization();
    if(options){
      if(options == "password"){
        return this.http.put<User>(this.url+`/${this.authService.getUser2().id}`,{new:user},{params:{option:options},withCredentials:true,headers:headers});
      }
      //Role
      else{
        return this.http.put<User>(this.url+`/${this.authService.getUser2().id}`,{new:user},{withCredentials:true,headers:headers});
      }
    }
    return this.http.put<User>(this.url+`/${this.authService.getUser2().id}`,{new:user},{withCredentials:true,headers:headers});
  }

  public destroy(user_id:number):Observable<Object>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.delete<Object>(this.url+`/${user_id}`,{withCredentials:true,headers:headers});
  }

  public initUser():void{
    this._user = {id:0,nom:"",email:"",password:"",role:""};
  }
}
