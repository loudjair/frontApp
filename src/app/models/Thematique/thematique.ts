import { Theme } from "../Theme/theme";

export interface Thematique {
    id:number;
    thematique:string;
    image:string;
    description:string;
    created_at:Date;
    updated_at:Date;
    themes:Theme[];
}
