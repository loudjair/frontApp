import { Verset } from "../Verset/verset";

export interface Relation {
    //Information élementaire
    id:number;
    personnage:number;
    personnage_id:number;
    type:string;
    relation:string;
    livre_id:number;
    chapitre:number;
    versets:Verset;
    description?:string;
    relation_id:number;
    created_at:Date;
    updated_at:Date;
    //Information complémentaire
    livre?:string;
}
