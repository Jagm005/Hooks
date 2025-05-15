import { useEffect, useState } from 'react';
import { Button } from 'antd';
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
      setResultado("Respuesta correcta! 🎉");
    } else {
      setResultado("Respuesta incorrecta. Intenta de nuevo.");
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
      <div className="Boton">
        <br />
        <Button type="primary" color="default" variant="outlined" onClick={verificarRespuesta}>Responder</Button>
      </div>
      

      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default MensajeMontaje;