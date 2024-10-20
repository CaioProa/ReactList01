import React from 'react';

function BotaoAutenticacao({ logado }) {
  return (
    <div>
      {logado ? (
        <button>Sair</button>
      ) : (
        <button>Entrar</button>
      )}
    </div>
  );
}

export default BotaoAutenticacao;
