import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonnageService } from 'src/app/services/Personnage/personnage.service';
import { Personnage } from 'src/app/models/Personnage/personnage';
import { Location } from '@angular/common';


@Component({
  selector: 'app-page-info-personnage',
  templateUrl: './page-info-personnage.component.html',
  styleUrls: ['./page-info-personnage.component.css']
})
export class PageInfoPersonnageComponent implements OnInit{

  public personnage$!:Observable<Personnage>;
  public versets:string= "";
  public menu_class:Record<string,boolean> = {'display-none' : true};
  public parametres!:UrlSegment[];

  constructor(
    private service:PersonnageService,
    private route:ActivatedRoute,
    private router:Router,
    private location:Location
  ){}

  ngOnInit(): void {

    this.parametres = this.route.snapshot.url;
    // à modifier plus tard soit adopter OnChange ou configuer providers
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    //Récupération de l'identifiant du personnage
    const routeParams = this.route.snapshot.paramMap;

    const personnageId = Number(routeParams.get('id'));
    
    this.personnage$ = this.service.show(personnageId);

  }

  details(verset:string):void{
    this.versets = verset;
    if(this.menu_class["display-none"]){
      this.menu_class["display-none"] = !this.menu_class["display-none"];
    }

  }

  detail_off():void{
    this.menu_class["display-none"] = !this.menu_class["display-none"];
  }

  background(sexe?:string):string{
    return sexe == 'F' ? 'woman' : 'man';
  }
  image(sexe?:string):string{
    let src:string = "../../../../../assets/images/";
    return sexe == 'F' ? src+'woman.jpg' : src+'man.jpg';
  }
  retour():void{
    this.location.back();
  }
}
