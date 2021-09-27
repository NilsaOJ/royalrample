export interface HikeAPI {
  layer_name: string;
  nb_results: number;
  table_href: string;
  values: [{
    identifiant: string,
    nom: string,
    commune_depart: string,
    code_insee: string,
    depart: string,
    descriptif: string,
    cheminement_aller: string,
    cheminement_retour: string,
    difficulte: string,
    temps_parcours: string,
    longueur: string,
    denivele: string,
    vocation: string,
    observation: string,
    xdepart: number,
    ydepart: number,
    gid: number
  }]
}
