import { useState } from 'react';

function MostrarOcultar() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'} mensaje
      </button>
      {mostrar && <p>Este es un mensaje secreto y se autodestruira en 100 segundos .</p>}
    </div>
  );
}

export default MostrarOcultar;