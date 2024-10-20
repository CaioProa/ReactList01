import React from 'react';

function VerificacaoDesconto({ temDesconto }) {
  return (
    <div>
      {temDesconto ? <h1>Desconto Aplicado</h1> : <h1>Sem Desconto</h1>}
    </div>
  );
}

export default VerificacaoDesconto;
