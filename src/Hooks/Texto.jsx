import { useState } from 'react';
import { Button } from 'antd';

function MostrarOcultar() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <div className="Boton">
        <br />
        <Button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'} mensaje
      </Button>
      </div>
      
      {mostrar && <p>Hola, yo soy el mensaje secreto .</p>}
    </div>
  );
}

export default MostrarOcultar;