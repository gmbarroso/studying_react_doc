import React from 'react';
import LiftStateUp from '../liftstate';

import Fervendo from '../fervendo';

// Criando duas funções que farão as conversões de temperatura
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; 
}

// a function seguinte retornará os números das convercões em strings e a usaremos
// para calcular o valor de um input no outro
// ela irá retornar uma string vazia em valor inválido e manterá o valor de saída em
// arredondado ao third decimal
function converter(temperatura, convert) {
    const input = parseFloat(temperatura);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) /1000;
    return rounded.toString();
}

// O que faremos aqui é um Lift State Up, o que significa que vamos transferir um state
// de uma função, um objeto algo de um componente, jogaremos para o componente pai
// que irá transferir esse mesmo estado para outro componente.
// O estado que vamos trazer aqui vem do Componente LiftState que estamos importando
// Lá em cima. O componente atual irá receber esse state e isso se tornará a fonte
// da verdade para ele

class CalculadoraTemp extends React.Component {
    constructor(props) {
        super(props);

        //Fazendo o bind para alocar os valores no this
        this.controlandoMudancaC = this.controlandoMudancaC.bind(this);
        this.controlandoMudancaF = this.controlandoMudancaF.bind(this);
        
        this.state = {temperatura: '', scale: 'c'};
    }

    controlandoMudancaC(temperatura) {
        this.setState({scale: 'c', temperatura});
    }

    controlandoMudancaF(temperatura) {
        this.setState({scale: 'f', temperatura});
    }

    render() {
        const scale = this.state.scale;
        const temperatura = this.state.temperatura;
        const celsius = scale === 'f' ? converter(temperatura, toCelsius) : temperatura;
        const fahrenheit = scale === 'c' ? converter(temperatura, toFahrenheit) : temperatura;
        
        return(
            <div>
                <LiftStateUp scale='c'
                             temperatura={celsius}
                             controlandoMudanca={this.controlandoMudancaC} />
                <p />
                <LiftStateUp scale='f' 
                             temperatura={fahrenheit}
                            controlandoMudanca={this.controlandoMudancaF}/>

                <Fervendo celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

// Recapitulando o que acontece aqui quando digitamos os valores num dos inputs:
// - React chama a função que que controla mudança de Temperatura no LiftStateUp
// - Esse mesmo método chama o this.props.controlandoMudanca() com o novo valor.
// O props desse método passa esse valor que vem da CalculadoraTemp
// - Quando previament renderizado, a CalculadoraTemp tem especificado o valor do
// Celsius pelo controlandoMudancaC. O mesmo pelo Farenheit, por isso que eles
// são sempre chamados independente de onde vc entre com um valor novo.
// - Dentro desses metodos, a CalculadoraTemp pede ao React para rendereizar
// novamente ele mesmo quando ele chama o setState com esse novo valor entrado.
// - React chama o conteudo do CalculadoraTemp e faz a conversão de temperatura aqui.
// - O proprio React  renderiza os metodos individualmente no LifitStateUp com suas
// novas props especificadas pelo CalculadoraTemp.
// - O DOM é atualizado e tudo acontece novamente

export default CalculadoraTemp;

