import React from 'react';

function StatusUsuario({ online }) {
  return (
    <div>
      {online ? <h1>Usuário online</h1> : <h1>Usuário offline</h1>}
    </div>
  );
}

export default StatusUsuario;
