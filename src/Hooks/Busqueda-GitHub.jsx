import { useState } from 'react';

function BusquedaGitHub() {
  const [usuario, setUsuario] = useState('');

  return (
    <div>
      <p>Buscador de usuarios de GitHub</p>
      <p>Ingresa el nombre de usuario de GitHub que deseas buscar:</p>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Ingresa usuario de GitHub"
      />
      <p>Buscando... : {usuario}</p>
    </div>
  );
}

export default BusquedaGitHub;