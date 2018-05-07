import React from 'react';
// import styles from './styles.css';

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
    );
  }

// Seguindo
// function PainelSplitado(props) {
//     return (
//         <div className="SplitPane">
//             <div className="SplitPane-left">
//                 {props.left}
//             </div>
//             <div className="SplitPane-right">
//                 {props.right}
//             </div>
//         </div>
//     );
// }

// Especialização
function Dialog(props) {
    return (
      <Borda color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </Borda>
    );
  }

  class CompVSInherit extends React.Component {
    constructor(props) {
      super(props);
      this.controlaMudanca = this.controlaMudanca.bind(this);
      this.controlaEntrada = this.controlaEntrada.bind(this);
      this.state = {login: ''};
    }
  
    render() {
      return (
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
          <input value={this.state.login}
                 onChange={this.controlaMudanca} />
          <button onClick={this.controlaEntrada}>
            Sign Me Up!
          </button>
        </Dialog>
      );
    }
  
    controlaMudanca(x) {
      this.setState({login: x.target.value});
    }
  
    controlaEntrada() {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }

export default CompVSInherit


  

  
