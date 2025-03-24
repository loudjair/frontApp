import { PersonnageRole } from "../PersonnageRole/personnage-role";

export interface Role {
    id:number;
    role:string;
    description?:string;
    created_at:Date;
    updated_at:Date;
    pivot?:PersonnageRole;
}
