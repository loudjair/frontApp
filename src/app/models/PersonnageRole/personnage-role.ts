import { Verset } from "../Verset/verset";

export interface PersonnageRole {
    id:number;
    personnage_id:number;
    role_id:number;
    livre_id:number;
    chapitre:number;
    versets:Verset;
    description?:string;
    created_at:Date;
    updated_at:Date;
    role?:string;
    livre?:string;
}
