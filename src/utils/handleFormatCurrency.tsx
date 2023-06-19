export const handleFormatCurrency = (value: any): string => {
    const formattedValue = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    return formattedValue;
};