import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Role } from 'src/app/models/Role/role';
import { URL } from 'src/assets/api';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private url:string = URL.urlApi+"/roles";
  constructor(private http:HttpClient, private authService:AuthService) { }

  public index():Observable<Role[]>{
    return this.http.get<Role[]>(this.url);
  }

  public store(role:any):Observable<Role>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.post<Role>(this.url,{new:role},{withCredentials:true,headers:headers});
  }


  public show(id:number):Observable<Role>{
    return this.http.get<Role>(this.url+`/${id}`);
  }

  public update(role:any):Observable<Role>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.put<Role>(this.url+`/${role.id}`,{new:role},{withCredentials:true,headers:headers});
  }

  public destroy(id:number):Observable<any>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.delete(this.url+`/${id}`,{params:{role:id},withCredentials:true,headers:headers});
  }

}
