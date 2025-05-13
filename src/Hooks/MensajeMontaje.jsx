import { useEffect, useState } from 'react';

function MensajeMontaje() {
  const [respuesta, setRespuesta] = useState('');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    console.log("Componente montado");
  }, []);

  const verificarRespuesta = () => {
    // Puedes cambiar el acertijo y respuesta correcta si quieres
    const respuestaCorrecta = "seis";
    if (respuesta.toLowerCase().trim() === respuestaCorrecta) {
      setResultado("✅ La bomba se desactivó");
    } else {
      setResultado("💥 Has fallado");
    }
  };

  return (
    <div>
      <h3>Acertijo:</h3>
      <p>¿Qué palabra de cuatro letras contiene seis</p>

      <input
        type="text"
        placeholder="Tu respuesta..."
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
      />
      <button onClick={verificarRespuesta}>Responder</button>

      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default MensajeMontaje;