import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Thematique } from 'src/app/models/Thematique/thematique';
import { URL } from 'src/assets/api';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ThematiqueService {

  private url:string = URL.urlApi+"/thematiques";

  constructor(private http:HttpClient,private authService:AuthService) { }
  
  public index():Observable<Thematique[]>{
      return this.http.get<Thematique[]>(this.url);
  }

  public store(thematique:any):Observable<Thematique>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.post<Thematique>(this.url,{new:thematique},{withCredentials:true,headers:headers});
  }

  public show(id:number):Observable<Thematique>{

    return this.http.get<Thematique>(this.url+`/${id}`);
  }

  public update(thematique:any):Observable<Thematique>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.put<Thematique>(this.url+`/${thematique.id}`,{new:thematique},{withCredentials:true,headers:headers});
  }

  public destroy(id:number):Observable<any>{
    const headers = this.authService.initHeaderAuthorization();
    return this.http.delete(this.url+`/${id}`,{withCredentials:true,headers:headers});
  }
}
