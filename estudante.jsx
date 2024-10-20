import React from 'react';

function VerificacaoEstudante({ estudante }) {
  return (
    <div>
      {estudante ? <h1>Você é um estudante</h1> : <h1>Você não é um estudante</h1>}
    </div>
  );
}

export default VerificacaoEstudante;
