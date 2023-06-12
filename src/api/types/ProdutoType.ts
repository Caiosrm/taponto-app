export type ProdutoType = {
    id: string;
    nome: string;
    descricao: string;
    cantinaId: string;
    quantidade: number;
    tipo: string;
    valor: number;
    imagem?: string;
}

export const initialStateProduto: ProdutoType = {
    id: "",
    nome: "",
    descricao: "",
    cantinaId: "",
    quantidade: 2,
    imagem: '',
    valor: 2,
    tipo: ""
}