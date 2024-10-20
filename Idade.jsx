import React from 'react';

function VerificacaoIdade({ idade }) {
  if (idade >= 18) {
    return (
      <div>
        <h1>Você é adulto</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Você é menor de idade</h1>
      </div>
    );
  }
}

export default VerificacaoIdade;
