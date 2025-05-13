import { useState } from 'react';

function MostrarOcultar() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'} mensaje
      </button>
      {mostrar && <p>Hola, yo soy el mensaje secreto .</p>}
    </div>
  );
}

export default MostrarOcultar;