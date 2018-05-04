import React from 'react';
import styles from './styles.css'

// Aqui trabalharemos com Composition vs Inheritance
// PQ trabalhar com Composition model para reutilizar o código entre os Components

// Vamos trabalhar com alguns problemas que iniciantes em React geralmente enfrentam
// pois tentam trabalhar com herança

// Contenção
// Alguns Components não sabem quem serão seus filhos, comuns para casos 
// como Sidebar por exemplo. Por isso é recomendável usar o prop para passar 
// elementos aos seus filhos

// Isso permite que, ao renderizar, o Component esteja aberto para receber o meu parametro


function Borda(props) {
    return (
        <div className={'Borda Borda-' + props.color}>
            {props.children}
        </div>
    )
}

class CompVSInherit extends React.Component {
    render() {
        return(
            // Tudo que estiver dentro da tag Borda passa pelo Component borda como
            // filho pelo this.props. Já que o Comp Borda renderiza {props.children}
            // dentro da div, os parametros passados aparecem no output final
            <Borda color="blue">
                <h1 className="Dialog-title">
                    teste
                </h1>
                <p className="Dialog-message">
                    teste
                </p>
            </Borda>
        )
    }
}

export default CompVSInherit