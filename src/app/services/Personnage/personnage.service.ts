import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Personnage } from 'src/app/models/Personnage/personnage';
import { URL } from 'src/assets/api';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  private url:string = URL.urlApi+"/personnages";
  constructor(private http:HttpClient,private authService:AuthService) {
  }

  /**
   * index
   */
  public index():Observable<Personnage[]> {
    return this.http.get<Personnage[]>(this.url);
  }

  /**
   * store
   */
  public store(personnage:any):Observable<Personnage> {
    const headers = this.authService.initHeaderAuthorization();
    return this.http.post<Personnage>(this.url,{new:personnage},{withCredentials:true,headers:headers});
  }


  /**
   * show
   */
  public show(id:number):Observable<Personnage> {
    return this.http.get<Personnage>(this.url+`/${id}`);
  }

  /**
   * update
   */
  public update(personnage:any):Observable<Personnage> {
    const headers = this.authService.initHeaderAuthorization();
    return this.http.put<Personnage>(this.url+`/${personnage.id}`,{new:personnage},{withCredentials:true,headers:headers});
  }

  /**
   * destroy
   */
  public destroy(id:number):Observable<any>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.delete(this.url+`/${id}`,{withCredentials:true,headers:headers});
  }
}
