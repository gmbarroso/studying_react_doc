import React from 'react';

import Button from '../button';

// function handleClick(e) {
//     e.preventDefault();
//     console.log('Fui clicado!!!')
// }

//SmartComponent
class HandleEvents extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        // Quando temos uma função, é necessário dar um bind nele
        // Esse bind é necessário para fazer o 'this' funcionar no callback
        this.handleClick = this.handleClick.bind(this);
        this.outroClick = this.outroClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log(this.state)
    }

    outroClick = () => {
        console.log('this is:', this);
    }

    bindnorender() {
        console.log('funciono')
      
    }

    render() {
        return (
            <div>
                <p>
                    {/* Colocando o # para não recarregar a páfgina */}
                    <a href="#" onClick={this.handleClick}>
                        Click me
                    </a>
                </p>
                <Button x={this.handleClick} />

                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <p></p>

                {/* duas maneiras de fazer bind de function com React */}
                <button onClick={this.outroClick}>
                    Outro Click
                </button>
                {/* ou */}
                <button onClick={(e) => this.outroClick(e)}>
                    Outro Click
                </button>
                {/* Embora sejam a mesma coisa, é extremamente recomendável que
                seja feito como no primeiro, fazendo o bind no constructor */}
                <p></p>
                
                {/* Eu posso também fazer um bind direto no Componente quando render */}
                <button onClick={this.bindnorender.bind(this)}>Bind no render</button>
            </div>
        )
    }
}

export default HandleEvents;