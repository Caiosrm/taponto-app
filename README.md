# Programação Para Dispositivos Móveis em Android
## Trabalho Final
### Integrantes:

- 202302332137 - Gabriel M. Guimarães 
- 202303314183 - Gleriston G. Bezerra
- 202108145408 - Alisson Dias
- 202108704237 - Lucas Brasil

---


### Fluxograma da Aplicação

```mermaid

graph TB
    A(Aluno)
		B[Cantina]
		C((Catálogo de Itens))
		D((Painel de Gerenciamento))
		E((Pagamento))
		S(Status Pedido)

		A --> |faz pedido| B
    A --> |visualiza catálogo| C
    B --> |gerencia pedidos| D
    B --> |cadastra| E
		A --> |paga| E
		D --> |Informa| S
    B --> |edita catálogo| C
    B --> |reserva de itens| D
    B --> |sinaliza item esgotado| C
    B --> |status do pedido| D
    A --> |visualiza| S
    A --> |reserva p/ buscar depois| B
    
```
