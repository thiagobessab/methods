// 1 - Método slice(): Cópia rasa de uma parte de um array, retornando um novo array com os elementos selecionados. É uma maneira de extrair uma parte específica de um array sem modificar o array original. O método slice() aceita dois argumentos: o índice inicial (inclusivo) e o índice final que definem o intervalo de elementos que você deseja extrair.

//array.slice(início, fim)

// array: O array de origem do qual você deseja extrair uma parte.
// início: O índice do elemento onde você deseja começar a extrair (incluído).
// fim: O índice do elemento onde você deseja parar a extração (excluído).

const array = [1, 2, 3, 4, 5]
const subArray = array.slice(3, 4)

// Retorna [4]
console.log(subArray)

// 2 - Método splice(): É usado para modificar o conteúdo de um array, permitindo adicionar, remover ou substituir elementos no array original. Ele é uma das funções mais versáteis para manipular arrays. O método splice() aceita três ou mais argumentos, dependendo de como você deseja usá-lo

//array.splice(início, quantosRemover, elemento1, elemento2, ...);

// array: O array de origem que você deseja modificar.
// início: O índice no array onde as operações de inserção/remoção devem começar.
// quantosRemover (opcional): O número de elementos a serem removidos a partir do índice início. Se for 0, nenhum elemento será removido.
// elemento1, elemento2, ... (opcional): Elementos a serem adicionados ao array a partir do índice início.

const array2 = [1, 2, 3, 4, 5]
// Remove o elemento 3
console.log(array2.splice(2, 1))

// 3 - Método filter(): É usado para criar um novo array com todos os elementos que passam em um teste especificado por uma função de retorno de chamada. Esse método é útil quando você deseja extrair elementos de um array que atendem a uma determinada condição.

//const newArray = array.filter(callback(elemento, índice, arrayOriginal));

// array: O array original que você deseja filtrar.
// callback: Uma função de retorno de chamada que é chamada para cada elemento do array.
// elemento: O elemento atual sendo processado no array.
// índice (opcional): O índice do elemento atual no array.
// arrayOriginal (opcional): O array original que está sendo filtrado.

const array3 = [1, 2, 3, 4, 5]
const evenNumbers = array3.filter(num => num % 2 === 0)
// Retorna [2, 4]
console.log(evenNumbers)
