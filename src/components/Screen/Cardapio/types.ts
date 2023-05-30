
export interface ICardapioProps {
    pageTitle: "Cardapio",
    idProduto:string;
    produto: IProduto; //um produto
    idProdutos:string;
    produtos: IProduto[]; //array de produtos
    
}
export interface IProduto {
    id: string;
    nome: string;
    lanchonete: string;
    valor: number;
    descricao: string;
    tipoDeAlimento: string;
    quantidade: number;
    imagem: string;
    avaliacao: number;
    review: string;
};





export const initialStateProduto: IProduto = {
    id: '',
    nome: '',
    lanchonete: '',
    valor: 0,
    descricao: '',
    tipoDeAlimento: '',
    quantidade: 0,
    imagem: '',
    avaliacao: 0,
    review: '',
};

export const initialStateProdutos: IProduto[] = [];
