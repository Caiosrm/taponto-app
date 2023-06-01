export type ProdutoType = {
    id: string;
    idCantina: string;
    quantidade: number;
    valor: number;
    avaliacoes?: {
        comentario: string;
        nota: string;
        clienteId: string;
    } 
}