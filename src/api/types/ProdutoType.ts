export type ProdutoType = {
    id: string;
    nome: string;
    descricao: string;
    cantinaId: string;
    quantidade: number;
    tipo: string;
    valor: any;
    imagem?: string;
    codigoDeBarras: number;
    visibilidade: boolean;
}

export const initialStateProduto: ProdutoType = {
    id: "",
    nome: "",
    descricao: "",
    cantinaId: "",
    quantidade: 2,
    imagem: '',
    valor: 2,
    tipo: "",
    codigoDeBarras: 0,
    visibilidade: true,
}