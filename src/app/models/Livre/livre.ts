import { ThemeLivre } from "../ThemeLivre/theme-livre";

export interface Livre {
    id:number;
    titre:string;
    chapitre_total:number;
    verset_total:number;
    apocryphe:string;
    testament:string;
    description?:string;
    created_at:Date;
    updated_at:Date;
    pivot?:ThemeLivre;
}
