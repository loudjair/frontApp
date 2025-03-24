import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Livre } from 'src/app/models/Livre/livre';
import { URL } from 'src/assets/api';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private url:string = URL.urlApi+"/livres";
  constructor(private http:HttpClient, private authService:AuthService) { }
  /**
   * index
   */
    public index():Observable<Livre[]> {
      return this.http.get<Livre[]>(this.url);
    }

    /**
     * store
     */
    public store(livre:any):Observable<Livre>{
      const headers = this.authService.initHeaderAuthorization();
      return this.http.post<Livre>(this.url,{new:livre},{withCredentials:true,headers:headers});
    }

    /**
     * show
     */
    public show(livre_id:number):Observable<Livre> {
      return this.http.get<Livre>(this.url+`/${livre_id}`);
    }

    /**
     * update
     */
    public update(livre:any):Observable<Livre> {
      const headers = this.authService.initHeaderAuthorization();
      return this.http.put<Livre>(this.url+`/${livre.id}`,{new:livre},{withCredentials:true,headers:headers});
    }

    /**
     * destroy
     */
    public destroy(livre_id:number):Observable<any> {
      const headers = this.authService.initHeaderAuthorization();
      return this.http.delete(this.url+`/${livre_id}`,{withCredentials:true,headers:headers});
    }
}
