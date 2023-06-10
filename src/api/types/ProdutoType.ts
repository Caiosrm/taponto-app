export type ProdutoType = {
    id: string;
    nome: string;
    descricao: string;
    cantinaId: string;
    quantidade: number;
    valor: number;
    imagem?: string;
    avaliacoes?: {
        comentario: string;
        nota: string;
        clienteId: string;
    } 
}

export const initialStateProduto: ProdutoType = {
    id: "",
    nome: "",
    descricao: "",
    cantinaId: "",
    quantidade: 2,
    imagem: '',
    valor: 2
}