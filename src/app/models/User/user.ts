export interface User {
    id:number;
    nom:string;
    email:string;
    password:string;
    role:string;
    created_at?:Date;
    updated_at?:Date;
    email_verified_at?:Date |null;
    remember_token?:string|null;
}
