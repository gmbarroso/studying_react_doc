import React from 'react';
import styles from './styles.css';

// Aqui vamos rabalhar com Formularios
// formularios HTML no React funcionam de forma um pouco diferente que elementos DOM
// Ex:
// <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>

// Nesse formulario acima, no React ele funciona, mas em alguns casos é bom
// trabalharmos com uma função JS para receber os valores desse formulario e 
// ter acesso aos dados de entrada. Uma maneira default de trabalhar com isso 
// é o "Controlled Components":
{/* <input> <textearea> <select> */ }
// Os controlled Components já tem um state inicial prédefinido apenas por usar
// uma tag específica. Isso no React, um component que renderiza um form, também
// controla o que acontece nesse formulário é o caso do input por exemplo.
// O conceito novo aqui é o que o React chama de 'the source of truth.
// Vejamos o exemplo abaixo:

class Formulario extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // value: '',
            // value: 'Escreva aqui os Mutantes da segunda classe dos X-men',
            // value: 'gambit',

            // ============ Manipulando mais de um input
            vaiIndo: true,
            nConvidados: 2,
        };

        this.fazaMudanca = this.fazaMudanca.bind(this);
        this.fazoSubmit = this.fazoSubmit.bind(this);

        // ============ Manipulando mais de um input
        this.manipulandoInputs = this.manipulandoInputs.bind(this);
    }

    fazaMudanca(event) {
        this.setState({ value: event.target.value.toUpperCase() });
    }

    fazoSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }

    // ============ Manipulando mais de um input
    manipulandoInputs(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    //     Para o exemplo de selected, veja como se faz dentro do render o form abaixo:
    //      Repare no value do state para esse exemplo
    //  <select>
    //     <option value="wolverine">Wolverine</option>
    //     <option value="cyclops">Cyclops</option>
    //     <option selected value="gambit">Gambit</option>
    //     <option value="storm">Storm</option>
    // </select>



    render() {
        return (
            <form className={styles.formulario} onSubmit={this.fazoSubmit}>
                <label>
                    Teste:
                <input type="text" value={this.state.value} onChange={this.fazaMudanca} />
                </label>
                <input type="submit" value="Submit" />
                <p />
                <label>
                    <textarea value={this.state.value} onChange={this.fazaMudanca} />
                </label>
                <input type="submit" value="Submit" />
                <p />
                <label>
                    Escolha um mutante:
                    <p />
                    <select value={this.state.value} onChange={this.fazaMudanca}>
                        <option value="">Select</option>
                        <option value="wolverine">Wolverine</option>
                        <option value="cyclops">Cyclops</option>
                        <option value="gambit">Gambit</option>
                        <option value="storm">Storm</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
                <p />

                {/* // ============ Manipulando mais de um input */}
                <label>
                    Virão:
                <input
                        name="vaiIndo"
                        type="checkbox"
                        checked={this.state.vaiIndo}
                        onChange={this.manipulandoInputs} />
                </label>
                <br />
                <label>
                    Convidados:
                <input
                        name="nConvidados"
                        type="number"
                        value={this.state.nConvidados}
                        onChange={this.manipulandoInputs} />
                </label>
            </form>
        )
    }

    // O que acontece aqui?
    // O controleChange atualiza o state do React a cada letra escrita
    // Como o atributo value está setado no form, o que o usuário escrever
    // será escrito na tela

    // Pudemos ver que o value é aceito como atributo para controlar os components
    // Ainda para o select, é possível passar um array dentro do value como opção
    // <select multiple={true} value={['B', 'C']}>

    // controlando valores nulos nos inputs
    // <input value={null} />
}

export default Formulario;