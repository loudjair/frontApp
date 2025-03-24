import { Livre } from "../Livre/livre";
import { Thematique } from "../Thematique/thematique";

export interface Theme {
    id:number;
    theme:string;
    image:string;
    description?:string;
    thematique_id:number;
    thematique:Thematique;
    livres:Livre[];
    passages:Livre[];
    created_at:Date;
    updated_at:Date;
}
