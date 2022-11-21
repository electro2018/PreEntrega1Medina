import React from 'react';
import './App.css';

function App() {
  const saludo = "Saludo que prefieran"
  return (
    <div className="App">
      <NavBar/>
      {/* El NavBar contiene el Nombre de la tienda, un menu con links a las categorias de producto y el componente CartWidget */}
      {/* El componente CartWidget va a contener una imagen de un CARRITO y una burbuja con un nro hardcodeado adentro */}
      <ItemListContainer nombreQueQuieran={saludo} />
      {/* Renderiza un mensaje a partir de una prop */}
    </div>
  );
}

export default App;