# 122. Best Time to Buy and Sell Stock II

[Link para o exercício](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

# Explicação

O exercício consistem em receber uma matriz inteira de preços, em que preços[i] é o preço de uma determinada ação no i-ésimo dia.

Em cada dia, você pode decidir comprar e/ou vender o estoque. Você só pode manter no máximo uma ação por vez. No entanto, você pode comprá-lo e vendê-lo imediatamente no mesmo dia.

Deve-se retornar o lucro máximo que você pode alcançar.

# O que foi utilizado para resolver

Para realizar a solução, construímos uma tabela que armazena os lucros máximos em cada dia, considerando as decisões de compra e venda. A cada iteração, atualizamos os valores na tabela com base nas transações possíveis no dia atual, comparando com os valores acumulados dos dias anteriores.
