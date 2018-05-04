import React from 'react';

// Nesse exemplo iremos trabalhar com componentes que precisam retornar os mesmos
// dados alterados, quando compartilham de um mesmo acestral ou componente pai

// Criando Components
// function Fervendo(props) {
//     if(props.celsius >= 100) {
//         return <p>A água está fervendo</p>
//     }
//     return <p>A águal não está fervendo</p>
// }
// Componente criado em um arquivo único para ser lido por outro Component

//CRiando uma variável constante que aolocará dois objetos com seus valores
// Usaremos ele para o novo Input que transformará celsius em farenheit
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

// Nessa class vamos calcular se a água está fervendo ou não
class LiftStateUp extends React.Component {
    constructor(props){
        super(props);

        this.controlandoMudanca = this.controlandoMudanca.bind(this);
        this.state = {tempratura: ''};
    }

    controlandoMudanca(x) {
        // this.setState({temperatura: x.target.value});
        // Já que o temperatura mudou, mudamos aqui também
        this.props.controlandoMudanca(x.target.value);
    }

    render() {

        // criando uma constante que irá alocar o valor inicial da temperatura
        // const temperatura = this.state.temperatura;
        // transferindo o state para outro componente. O props significa que ele
        // espera alguma coisa. Eles são read-only.
        const temperatura = this.props.temperatura;
        // O que acontece aqui? Antes, com o state e temperatura estando local
        // era possível controlá-lo com um setState(). Mas como passamos o valor
        // dele para um pai, então é com prop.

        // Nova Constante para o novo input
        const scale = this.props.scale;

        

        return(
            <fieldset>
                {/* <legend>Temperatura:</legend>
                <input
                    value={temperatura}
                    onChange={this.controlandoMudanca} />ºC

                    <Fervendo
                        celsius={parseFloat(temperatura)} /> */}
                
                <legend>Digite uma temperatura em {scaleNames[scale]}:</legend>
                {/* Novo Input */}
                <input value={temperatura}
                       onChange={this.controlandoMudanca} />
                <p />                
                
            </fieldset>
        )
    }
}

export default LiftStateUp;