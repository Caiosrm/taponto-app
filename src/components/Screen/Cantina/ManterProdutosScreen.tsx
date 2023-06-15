import React, { useEffect } from 'react'
import { Box, View, Text, Image, Container, ScrollView } from 'native-base';

import { ProdutoType, initialStateProduto } from '../../../api/types/ProdutoType';
import { getCardapio } from '../../../api/utils/get/getCardapio';
import { CardapioType, initialStateCardapio } from '../../../api/types/CardapioType'
import { HeaderCantina } from '../../Common/Header/HeaderCantina';
import { ProductCard } from '../../Common/ProductCard';

interface ManterProdutosProps {
    pageTitle?: string;
}


export const ManterProdutosScreen = (props: ManterProdutosProps) => {

    const [cardapio, setCardapio] = React.useState<CardapioType>(initialStateCardapio);
    const [produto, setProduto] = React.useState<ProdutoType>(initialStateProduto);

    useEffect(() => {
        const fetchCardapio = async () => {
            const cantinaId = "Madrugao Lanches";
            try {
                const apiResponse = await getCardapio(cantinaId); // Chame a função getCardapio para obter os dados do cardápio
                setCardapio(apiResponse); // Atualize o estado do cardápio com os dados obtidos
                console.log("API Response: ", apiResponse);
            } catch (error) {
                console.log('Erro ao obter o cardápio:', error);
            }
        };
        fetchCardapio();
    }, []);



    return (
        <ScrollView>
            <HeaderCantina pageTitle="Meu Cardápio" />

            {cardapio.itens?.length > 0 ? (
                <View>
                    {cardapio.itens.map((produto: ProdutoType) => (
                        <ProductCard
                            key={produto.id}
                            name={produto.nome}
                            quantity={produto.quantidade}
                            value={produto.valor}
                            previewImage={produto.imagem}
                        />
                    ))}
                </View>
            ) : (
                <Text>Nenhum produto encontrado no cardápio</Text>
            )}
        </ScrollView>
    );

};
