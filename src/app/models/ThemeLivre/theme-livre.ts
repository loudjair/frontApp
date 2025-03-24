import { Verset } from "../Verset/verset";

export interface ThemeLivre {
    id:number;
    theme_id:number;
    livre_id:number;
    explications?:string;
    chapitre:number;
    versets:Verset;
    traduction?:string;
    edition?:string;
    created_at:Date;
    updated_at:Date;
}
