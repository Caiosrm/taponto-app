
export interface ICardapioProps {
    pageTitle: "Cardapio",
    idCantina:string;
    produtos: IProduto[]; //array de produtos
}
export interface IProduto {
    id: string;
    nome: string;
    descricao: string;
    cantinaId: string;
    quantidade: number;
    valor: number;
    avaliacoes: {
        comentario: string;
        nota: number;
        clienteId: string;
    }
};

export const initialStateProduto: IProduto = {
    id: '',
    nome: '',
    descricao: '',
    cantinaId: '',
    quantidade: 0,
    valor: 0,
    avaliacoes: {
        comentario: '',
        nota: 0.0,
        clienteId: ''
    }
};

export const initialStateProdutos: IProduto[] = [];
