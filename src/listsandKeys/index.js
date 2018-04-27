import React from 'react';

// Aqui aprenderemos a usar o map() do React
// A function map() será usada para receber um array de numeros e dobrar os seus valores
// Faremos isso enviando um novo array para o map para a variável double
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// Criando uma function para mapear esses numeros e renderizar
const listaDeItens = numbers.map((number) =>
    <li>{number}</li>
);

// No console do Browser, aparecerá o conteúdo do array
// Em React, transformar arrays em listas é quase idêntico

class ListsAndKeys extends React.Component {
    render() {
        return (
            <div>
            <ul>{listaDeItens}</ul>
            </div>
        )
    }
}

export default ListsAndKeys;