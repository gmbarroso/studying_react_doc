import React from 'react';
import styles from './styles.css';

import Button from '../button';

//Criando uma variável comment que receberá alguns parâmetros já com seus valores
// Essa variável é Global
const comment = {
    date: new Date(),
    text: 'Colossus, Wolverine, Phoenix, Cyclops, Banshee and NightCrawler',
    author: {
        name: 'X-men from the 70s',
        avatarUrl: 'https://i.pinimg.com/originals/60/c8/7b/60c87b0ab4b586a298e8f3867319e3e8.jpg',
    },
};

// Conceitualmente um Componente é como se fosse uma função do JS
// Eles aceitam arbitrariamente os inputs (props) e retornam 
// elementos React descrevendo o que eles devem mostrar na tela
// vide exemplo Welcome

// Criando um Component
function Welcome(props) {
    return <h2> Hello, {props.name}</h2>;
}
// Isso acima é como se fosse 
// const props = {
//     name: string,
// }
// Para esse componente apenas

// Component. Aqui ele se comporta do mesmo jeito que o Welcome
function Grupo(props) {
    return <h1> You are my {props.xmen} </h1>;
}

// function
function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img className={styles.imagem}
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="">
            <Avatar user={props.user} />
            {/* É como se o user fosse o ponto de contato entre o Component e a variśvel */}
            <div className="">
                {props.user.name}
            </div>
        </div>
    )
}

// Component
function Comments(props) {
    // O props signisifca que ele espera alguma coisa
    return (
        <div >
            <UserInfo user={props.author} />
            <div >
                {props.text}
            </div>
            <div >
                {formatDate(props.date)}
            </div>
        </div>
    );
}

// O que acontece aqui:
// React está chamando o componente Welcome no render ali embaixo
// que espera uma propriedade name (props)
// O componente Welcome retorna uma sentença html como resultado 
// com o valor da propriedade que eu passo para ele ali na hora de renderizar
// Por fim ele escreve na tela

// O que acontece com o Component Comments?
// A minha função formatDate, por exemplo, ta esperando um parametro date
// O meu Component Comments está esperando um props qualquer e dentro dele
// Eu digo que esse props é um date.
// Na hora de renderizar eu falo que esse date vem do comments
// O mesmo acontece com os outros, mesmo que estejam dentro do Comments
class ComponentsAndProps extends React.Component {

    render() {
        return (
            <div>
                {/* O name é a propriedade que está sendo esperada pelo 
                Componente (function) Welcome com o props */}
                <Welcome name="Scott" />
                <Welcome name="Jean" />
                <Welcome name="Logan" />
                <Welcome name="Ororo" />
                <Welcome name="Kurt" />
                <Welcome name="Sean" />
                <Welcome name="Pyotr" />   
                <Grupo xmen="X-men" />

                <Comments
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
            </div>

        )
    }
}

export default ComponentsAndProps;





