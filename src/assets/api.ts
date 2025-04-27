export const URL = {
    urlApi:"https://api.apprb.ovh/api"
};

export const TRADUCTIONS = ['Sarment'];

export const EDITIONS = ['Edition du JUBILE'];  

export type NomLivre = "Genese"|"Exode"|"Mathieu"|"Luc";

export let ongletLivre = {
    Genese:{tabcontent:true,displayNone:true,displayFlex:false},
    Exode:{tabcontent:true,displayNone:true,displayFlex:false},
    Mathieu:{tabcontent:true,displayNone:true,displayFlex:false},
    Luc:{tabcontent:true,displayNone:true,displayFlex:false}
};


export let ongletActif = {ancien:"",nouveau:""};
