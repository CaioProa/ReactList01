import React from 'react';

function SaudacaoAutenticado({ autenticado }) {
  if (autenticado) {
    return (
      <div>
        <h1>Bem-vindo, usuário!</h1>
      </div>
    );
  } else {
    return null; 
  }
}

export default SaudacaoAutenticado;
