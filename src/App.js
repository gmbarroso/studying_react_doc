import React, { Component } from 'react';
import './App.css';

// import HelloWorld from './helloWorld';
// import ComponentsAndProps from './compAndprops';
// import StatesAndLifecycle from './statesAndlifecycle';
// import HandleEvents from './handleEvents';
// import ConditionalRender from './conditionalRender';
// import ListsAndKeys from './listsandKeys';
// import Formulario from './forms';
// import LiftStateUp from './liftstate';
// import CalculadoraTemp from './calculadoraTemp';
import CompVSInherit from './compVSinherit';

// import Button from './button';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <HelloWorld /> */}
      {/* <ComponentsAndProps /> */}

      {/* Como eu adicionei um Local State no StatesAndLifecycle, eu não preciso mais do props
      Os Componentes de Class, nesses casos, devem sempre chamar o constructor com o props */}
      {/* <StatesAndLifecycle date={new Date()}/> */}
      {/* Portanto */}
      {/* <StatesAndLifecycle /> */}

      {/* <HandleEvents /> */}

      {/* <ConditionalRender /> */}

      {/* <ListsAndKeys /> */}

      {/* <Formulario /> */}

      {/* <LiftStateUp /> */}
      {/* <CalculadoraTemp /> */}

      <CompVSInherit />

      {/* <Button /> */}
      </div>
    );
  }
}

export default App;
