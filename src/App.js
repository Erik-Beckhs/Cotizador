import './App.css';
import React, {Fragment, useState} from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  const [cantidad, obtieneCantidad] = useState(0);
  const [plazo, obtienePlazo] = useState('');

  return (
    //<div className="App">
    <Fragment>
      <Header
        titulo = 'Cotizador'
      />
      <div className = "container">
        <Formulario
        cantidad = {cantidad}
        obtieneCantidad = {obtieneCantidad}
        plazo = {plazo}
        obtienePlazo = {obtienePlazo}
        />
      </div>


    </Fragment>
    //</div>

  );
}

export default App;
