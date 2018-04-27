import React from 'react';

// function Clock(props) {
//     return (
//         <div>
//             <h1> The end is comming...</h1>
//             <h2>{props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }

// Transformando o Component Clock em uma Class:
// Criar uma classe no formato abaixo com React.Component no final
// Adicionar um método vazio chamado render()
// Mover o conteúdo do Componente para dentro do render na Class
// No lugar de props colocar this.props

class StatesandLifecycle extends React.Component {

    // Adicionando um constructor para trabalhar com o LocalState
    constructor(props){
        super(props);

        this.state = {date: new Date()};
    }

    // Adicionando métodos Lifecycle na classe
    // Quando se tem muitos Components, é muito importante limpar os parametros
    // quando  não o precisamos mais

    // Nesse caso nós queremos setar um time sempre que a nossa Class renderizar
    // pela primeira vez. Isso se chama 'mounting'

    // Também queremos limpar o tempo sempre que o DOM for removido, ou seja,
    // quando ele MSFIDOSignatureAssertion. Isso se chama 'unmounting'

    // Sendo assim, nós declaramos uns métodos especiais nos components que
    // se chamam lifecycle hooks
    componentDidMount() {
        // Esse método run depois que o componente foi renderizado
        // Portanto:
        this.timerID = setInterval(
            () => this.ticktack(),
            1000
        );
        // Estamos salvando o time no this

        // enquanto que o this.props é setado pelo próprio React e o this.state
        // tem um comportamento único, estamos livres para criar campos adicionais
        // caso desejemos guardar alguma coisa que não está no escopo. É o caso do
        // timerID
    }

    componentWillUnmount() {
        // Aqui dentro vamos desmontar o que construimos com o método anterior
        clearInterval(this.timerID);
    }

    // Por fim vem o método abaixo para contar o relógio a cada segundo
    ticktack(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                {/* <Clock date={new Date()} /> */}
                <h1> The end is comming...</h1>

                {/* Adicionando Local State a uma classe */}
                {/* <h2>{this.props.date.toLocaleTimeString()}</h2> */}
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                
            </div>
        )
    }

}

// setInterval(Clock, 1000);

export default StatesandLifecycle; 