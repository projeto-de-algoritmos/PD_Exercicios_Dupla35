# 72. Edit Distance

[Link para o exercício](https://leetcode.com/problems/edit-distance)

# Explicação

O exercício consistem em dar o número mínimo de operações necessárias para converter uma string em outra.


# O que foi utilizado para resolver

A solução utiliza programação dinâmica para resolver o problema, usando também uma matriz, onde os casos base são tratados inicializando a primeira coluna e a primeira linha da matriz dp. A primeira coluna representa a transformação de uma palavra vazia em word2, portanto, o número mínimo de operações é igual ao número de caracteres em word2. A primeira linha representa a transformação de word1 em uma palavra vazia, portanto, o número mínimo de operações é igual ao número de caracteres em word1. A partir daí a matriz vai sendo preenchida.