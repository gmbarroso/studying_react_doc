import React from 'react';
import styles from './styles.css';

// Criando 5 Components
function Logado(props) {
    return <h1>Bem vindo!</h1>
}

function Logar(props) {
    return <h1>Você precisa Logar</h1>
}

function OkEntao(props) {
    const estaLogado = props.estaLogado;

    // Alocando um valor numa variável.
    // É o mesmo que if(props.estaLogado)
    if (estaLogado) {
        return <Logado />
    }
    else {
        return <Logar />
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
      </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
      </button>
    );
}

// ===================================
const mensagens = ['1 Mensagem', '2 Mensagens', '3 Mensagens']

function Mail(props) {
    const msgnaoLidas = props.msgnaoLidas

    return (
        <div>
            {msgnaoLidas.length > 0 &&
                <h2> Você tem {msgnaoLidas.length} mensagens não lidas.</h2>
            }
        </div>
    )
}

//================================
// No caso para que quando seja falso, o compoente se esconda
function Aviso(props) {
    // Criando um parametro warn que será esperado pelo Component
    // na hora de renderizar
    if (!props.warn) {
        return null;
    }

    return (
        <div className={styles.cuidado}>
            Cuidado!
      </div>
    );
}

// =============================
    // É importante dizer que mesmo quando se retorna null de um Component no render
    // não irá afetar o lifecycle de component do React.
    // Os métodos compponentWillupdate e componentDidUpdate continuarão sendo chamados
// ==============================

class ConditionalRender extends React.Component {

    constructor(props) {
        super(props);

        // Fazendo bind nas funções criadas dentro da classe
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        // estabelecendo o state do botão ao iniciar a aplicação
        // this.state = { estaLogado: false };

        // estabelecendo um state para o aviso e dando bind na function nova
        this.state = { 
            estaLogado: false,
            aviso: true };

        this.handleClickforAviso = this.handleClickforAviso.bind(this);
    }

    // Criando as funções que farão o controle de Login e Logoff
    handleLoginClick() {
        this.setState({ estaLogado: true });
    }

    handleLogoutClick() {
        this.setState({ estaLogado: false });
    }

    handleClickforAviso() {
        this.setState(prevState => ({
            aviso: !prevState.aviso
        }));
    }

    render() {
        // Ao renderizar, a variável abaixo irá guardar o valor de que
        // o objeto que o state espera estará true 
        const estaLogado = this.state.estaLogado;
        console.log(this.state);

        // E a variável button está guardando uma condição
        // Se estiver o objeto estaLogado true, então ele renderiza 
        // o Component LogoutButton se não ele renderuiza o LoginButton
        // Ou seja, a renderização nesse caso é condicional
        const button = estaLogado ? (
            <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
                <LoginButton onClick={this.handleLoginClick} />
            );

        return (
            <div>
                <OkEntao estaLogado={estaLogado} />
                {button}
                <Mail msgnaoLidas={mensagens} />

                {/* Renderizando a condicional diretamente no render() */}
                {estaLogado ? 'estou logado' : 'não estou logado'}
                <p></p>
                <button onClick={this.handleClickforAviso}>
                    {this.state.aviso ? 'Hide' : 'Show'}
                </button>
                <Aviso warn={this.state.aviso} />

            </div>
        )
    }
}

export default ConditionalRender;