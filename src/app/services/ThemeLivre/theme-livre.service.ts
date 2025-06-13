import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ThemeLivre } from 'src/app/models/ThemeLivre/theme-livre';
import { URL } from 'src/assets/api';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeLivreService {

  private url:string = URL.urlApi+"/themes_livres";
  constructor(private http:HttpClient,private authService:AuthService) {}
  /**
   * index
   */
  public index():Observable<ThemeLivre[]> {
    return this.http.get<ThemeLivre[]>(this.url);
  }
  /**
   * store
   */
  public store(valeur:any):Observable<ThemeLivre>{
    const headers = this.authService.initHeaderAuthorization();
    valeur.user_id = this.authService.getUser2().id;
    return this.http.post<ThemeLivre>(this.url,{new:valeur},{withCredentials:true,headers:headers});
  }

  public show(id:number):Observable<ThemeLivre> {
    //On ajoute la variable params au cas où le serveur n'arrive pas lire le paramètre id dans l'URL
    return this.http.get<ThemeLivre>(this.url+`/${id}`,{params:{themes_livre:id}});
  }

  /**
   * update
   */
  public update(valeur:any):Observable<ThemeLivre> {
    const headers = this.authService.initHeaderAuthorization();
    valeur.user_id = this.authService.getUser2().id;
    return this.http.put<ThemeLivre>(this.url+`/${valeur?.id}`,{new:valeur},{params:{themes_livre:valeur?.id},withCredentials:true,headers:headers});
  }
  /**
   * destroy
   */
  public destroy(id:number):Observable<any> {
    const headers = this.authService.initHeaderAuthorization();
    return this.http.delete(this.url+`/${id}`,{withCredentials:true,headers:headers});
  }
}
