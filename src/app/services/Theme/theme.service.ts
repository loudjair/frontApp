import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Theme } from 'src/app/models/Theme/theme';
import { URL } from 'src/assets/api';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private url:string = URL.urlApi+"/themes";
  constructor(private http:HttpClient,private authService:AuthService) {}
  /**
   * index
   */
  public index():Observable<Theme[]> {
    return this.http.get<Theme[]>(this.url);
  }
  /**
   * store
   */
  public store(valeur:any):Observable<Theme>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.post<Theme>(this.url,{new:valeur},{withCredentials:true,headers:headers});
  }

  public show(id:number):Observable<Theme> {
    //On ajoute la variable params au cas où le serveur n'arrive pas lire le paramètre id dans l'URL
    return this.http.get<Theme>(this.url+`/${id}`,{params:{theme:id}});
  }

  /**
   * update
   */
  public update(valeur:any):Observable<Theme> {
    const headers = this.authService.initHeaderAuthorization();
    return this.http.put<Theme>(this.url+`/${valeur?.id}`,{new:valeur},{params:{theme:valeur?.id},withCredentials:true,headers:headers});
  }
  /**
   * destroy
   */
  public destroy(id:number):Observable<any> {
    const headers = this.authService.initHeaderAuthorization();
    return this.http.delete(this.url+`/${id}`,{params:{theme:id},withCredentials:true,headers:headers});
  }
}
