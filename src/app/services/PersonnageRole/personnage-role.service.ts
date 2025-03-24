import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { PersonnageRole } from 'src/app/models/PersonnageRole/personnage-role';
import { URL } from 'src/assets/api';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnageRoleService {
  
  private url:string = URL.urlApi+"/personnages_roles";
  constructor(private http:HttpClient,private authService:AuthService) {}
  
  /**
 * index
 */
  public index():Observable<PersonnageRole[]> {
    return this.http.get<PersonnageRole[]>(this.url);
  }

  /**
   * store
   */
  public store(new_value:any):Observable<PersonnageRole>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.post<PersonnageRole>(this.url,{new:new_value},{withCredentials:true,headers:headers});
  }

  /**
   * show
   */
  public show(id:number):Observable<PersonnageRole> {
    return this.http.get<PersonnageRole>(this.url+`/${id}`,{params:{personnages_role:id}});
  }

  /**
   * update
   */
  public update(value:any):Observable<PersonnageRole>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.put<PersonnageRole>(this.url+`/${value.id}`,{new:value},{params:{personnages_role:value.id},withCredentials:true,headers:headers});
  }

  /**
   * destroy
   */
  public destroy(id:number):Observable<any> {
    const headers = this.authService.initHeaderAuthorization();
    return this.http.delete(this.url+`/${id}`,{params:{personnages_role:id},withCredentials:true,headers:headers});
  }
}
