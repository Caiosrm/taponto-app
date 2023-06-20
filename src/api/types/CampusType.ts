export type CampusType = {
  id?: string;
  nome: string;
  rua: string;
  numero: number;
  bairo: number;
};

export const initialStateCampus: CampusType = {
  nome: "",
  rua: "",
  numero: 0,
  bairo: 0
}