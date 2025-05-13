import { useState, useEffect } from 'react';

function Cronometro() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => setSegundos(s => s + 1), 1000);
    return () => clearInterval(intervalo); // Limpieza
  }, []);

  return <p>Tiempo transcurrido: {segundos} segundos</p>;
}

export default Cronometro;