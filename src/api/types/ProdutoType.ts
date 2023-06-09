export type ProdutoType = {
    id: string;
    nome: string;
    descricao: string;
    cantinaId: string;
    quantidade: number;
    valor: number;
    avaliacoes?: {
        comentario: string;
        nota: string;
        clienteId: string;
    } 
}