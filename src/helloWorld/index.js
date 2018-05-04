import React from 'react';

// Criando uma variável constante chamada usuario que irá trazer dois objetos
//  dentro dele
const someone = {
    firstName: 'Guilherme',
    lastName: 'Barroso',
};

// Criando uma função com o nome welcome que espera um parametro chamado someone
function welcome(someone) {
    // Já retornando que objetos esse usuário irá trazer
    // return someone.firstName + ' ' + someone.lastName;
    // ou
    return `${someone.firstName} ${someone.lastName}`
}

function boasvindas(someone) {
    if (someone) {
        return <h1>Hello, {welcome(someone)}!</h1>
    } else {
        return <h1>Hello, Stranger...</h1>
    }
}

function ticktack() {
    return (
        <div>
            <h2>São {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}

// Criando uma variável constante que traz o meu "HTML"
// const element = <h1> Hello, {welcome(someone)}</h1>;
// const element = <div tabIndex="0"></div>;
const element = (
    <div>
        <h1>Hello</h1>
        <h2>Good to see you here, {someone.firstName}!</h2>
        <p>{ticktack()}</p>
        {/* <p>{boasvindas()}</p> */}
        <p>{boasvindas(someone)}</p>
    </div>
)
// O conteúdo da variável element pode ser carregado diretamente no render também
// vide comentado dentro do render

class HelloWorld extends React.Component {

    // Tudo que vier no render é o que eu quero que venha quando o site carregar
    render() {
        return (
            // Esse site está me trazendo todo o conteúdo da minha variável element
            element
            // < div >
            //     <h1>Hello</h1>
            //     <h2>Good to see you here, {someone.firstName}!</h2>
            //     <p>{ticktack()}</p>
            //     <p>{boasvindas(someone)}</p>
            // </div >
        )
    }
}

export default HelloWorld;