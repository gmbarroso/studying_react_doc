import React from 'react';

// Aqui aprenderemos a usar o map() do React
// A function map() será usada para receber um array de numeros e dobrar os seus valores
// Faremos isso enviando um novo array para o map para a variável double
const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

// // Criando uma function para mapear esses numeros e renderizar
// const listaDeItens = numbers.map((number) =>
//     // <li>{number}</li>
//     // Na hora de renderizar, seremos alertados no console do browser
//     // que uma key precisa ser definida para cada filho dentro do Array
//     // Essa key é uma string especial que precisamos para incluir elementos
//     // dentro da lista quando criado
//     // PORTANTO
//     <li key={number.toString()}>{number}</li>

//     // KEYS
//     // Keys em React ajuda a identificar que itens sofreram alguma mudança,
//     // ou foram adicionados ou foram removidos. Keys devem ser dados aos 
//     // elementos dentro de um array para dar a eles um identificador estável
//     // Ex:
// //     const todoItems = todos.map((todo) =>
// //     <li key={todo.id}>
// //         {todo.text}
// //     </li>
// // );

//     // E a melhor maneira de fazer isso é dando uma string unica que será usada
//     // Muitos dos casos pegamos as ids que já vem da nossa base
//     // Quando não temos o ID da base, usamos a palavra index como uma key
//     // Ex:
// //     const todoItems = todos.map((todo, index) =>
// //     <li key={index}>
// //         {todo.text}
// //     </li>
// // );
// );

// No console do Browser, aparecerá o conteúdo do array
// Em React, transformar arrays em listas é quase idêntico

// Usando o Keys da maneira correta
// Criando Components
function ListaItens(props) {
    return <li>{props.value}</li>
}

function ListaNumeros(props) {
    const numbers = props.numbers;
    const listdeItens = numbers.map((number) =>
        // Key sendo especificado dentro do Array
        <ListaItens key={number.toString()}
            value={number} />
    );

    return (
        <ul>
            {listdeItens}
        </ul>
    )
};

// Podemos usar também um mesmo key para duas listas diferentes.
// Keys devem ser únicas entre os seus semelhantes
const posts = [
    {
        id: 1,
        title: 'Clark',
        conteudo: 'This is yout home now',
    },
    {
        id: 2,
        title: 'Bruce',
        conteudo: 'Who kill your parents?',
    },
    {
        id: 3,
        title: 'HEY!!!',
        conteudo: 'Who is your God now! Who is your God now!??',
    },
]

function Blog(props) {
    const sidemenu = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const conteudo = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.conteudo}</p>
        </div>
    );

    return (
        <div>
            {sidemenu}
            <hr />
            {conteudo}
        </div>
    )
}

// Keys servem como uma dica para o React, mas eles não são passados
// para os Components. Se você precisa de uma valor expecífico, seja 
// claro como no funcionamento de uma prop com diferentes valores
// Ex:
// const conteudo = posts.map((post) =>
//     <Post
//         key={post.id}
//         id={post.id}
//         title={post.title} />
// );




class ListsAndKeys extends React.Component {
    render() {
        return (
            <div>
                {/* <ul>{listaDeItens}</ul> */}
                <ListaNumeros numbers={numbers} />
                <p></p>
                <Blog posts={posts} />
            </div>
        )
    }
}

export default ListsAndKeys;