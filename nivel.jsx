import React from 'react';

function SaudacaoNivel({ nivel }) {
  return (
    <div>
      {nivel === "iniciante" ? (
        <h1>Bem-vindo, iniciante!</h1>
      ) : nivel === "intermediário" ? (
        <h1>Você está progredindo!</h1>
      ) : nivel === "avançado" ? (
        <h1>Parabéns, especialista!</h1>
      ) : (
        <h1>Nível não reconhecido</h1>
      )}
    </div>
  );
}

export default SaudacaoNivel;
