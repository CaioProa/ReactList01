import React from 'react';

function Avaliacao({ nota }) {
  if (nota >= 90) {
    return <h1>Excelente</h1>;
  } else if (nota >= 70 && nota <= 89) {
    return <h1>Bom</h1>;
  } else {
    return <h1>Precisa melhorar</h1>;
  }
}

export default Avaliacao;
