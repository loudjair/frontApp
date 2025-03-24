import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Relation } from 'src/app/models/Relation/relation';
import { URL } from 'src/assets/api';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class RelationService {
  private url:string = URL.urlApi+"/relations";
  constructor(private http:HttpClient,private authService:AuthService) {}
  /**
   * index
   */
  public index():Observable<Relation[]> {
    return this.http.get<Relation[]>(this.url);
  }
  /**
   * store
   */
  public store(valeur:any):Observable<Relation>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.post<Relation>(this.url,{new:valeur},{withCredentials:true,headers:headers});
  }

  public show(id:number):Observable<Relation> {
    //On ajoute la variable params au cas où le serveur n'arrive pas lire le paramètre id dans l'URL
    return this.http.get<Relation>(this.url+`/${id}`,{params:{relation:id}});
  }

  /**
   * update
   */
  public update(valeur:any):Observable<Relation> {
    const headers = this.authService.initHeaderAuthorization();
    return this.http.put<Relation>(this.url+`/${valeur?.id}`,{new:valeur},{params:{relation:valeur?.id},withCredentials:true,headers:headers});
  }
  /**
   * destroy
   */
  public destroy(id:number):Observable<any> {
    const headers = this.authService.initHeaderAuthorization();
    return this.http.delete(this.url+`/${id}`,{params:{relation:id},withCredentials:true,headers:headers});
  }
}
