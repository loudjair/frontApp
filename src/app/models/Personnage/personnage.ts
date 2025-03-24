import { Evenement } from "../Evenement/evenement";
import { Relation } from "../Relation/relation";
import { Role } from "../Role/role";

export interface Personnage {
    //Information élementaire
    id:number;
    testament:string;
    nom:string;
    sexe?:string;
    naissance?:Evenement;
    deces?:Evenement;
    description:string;
    created_at:Date;
    updated_at:Date;
    //Information complémentaire
    roles:Role[];
    relations:Personnage[];
    pivot?:Relation;
}
