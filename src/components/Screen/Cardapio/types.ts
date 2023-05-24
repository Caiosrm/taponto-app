
export interface ICardapioProps {
    pageTitle: "Cardapio",
    idProduto:string;
    produto: IProduto; //um produto
    idProdutos:string;
    produtos: IProduto[]; //array de produtos
    
}
export interface IProduto {
    valor: ReactNode;
    id: string;
    nome: string;
    lanchonete: string;
    valorUnitario: number;
    descricao: string;
    tipoDeAlimento: string;
    calorias: number;
    quantidade: number;
    ingredientes: string;
    imagem: string;
    avaliacao: number;
    review: string;
};

export const initialStateProduto: IProduto = {
    id: '',
    nome: '',
    lanchonete: '',
    valorUnitario: 0,
    descricao: '',
    tipoDeAlimento: '',
    calorias: 0,
    quantidade: 0,
    ingredientes: '',
    imagem: '',
    avaliacao: 0,
    review: '',
};

export const initialStateProdutos: IProduto[] = [];