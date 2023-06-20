export type ProdutoType = {
    id: string;
    nome: string;
    descricao: string;
    cantinaId: string;
    quantidade: number;
    quantidadeNaSacola?: number;
    tipo: string;
    valor: number;
    imagem?: string;
    codigoDeBarras: number;
    visibilidade: boolean;
}

export const initialStateProduto: ProdutoType = {
    id: "",
    nome: "",
    descricao: "",
    cantinaId: "",
    quantidade: 0,
    imagem: '',
    valor: 0,
    tipo: "",
    codigoDeBarras: 0,
    visibilidade: true,
}