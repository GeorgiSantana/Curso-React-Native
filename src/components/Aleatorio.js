import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

/*const min = 10;
const max = 20;
const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

export default  () => (
  <Text style={Estilo.txtG}>
    Um valor aleatório entre {min} e {max}, pode ser: {numeroAleatorio}!
  </Text>
);*/

//Exemplo utilizando atribuição via desestruturação(destructuring assignment)
//É um expressão Js que torna possivel desembalar valores de props de obg em variaveis distintas
export default ({min, max}) => {
  const delta = max - min + 1;
  const aleatorio = parseInt(Math.random() * delta) + min;
  return <Text style={Estilo.txtG}>O valor aleatorio é {aleatorio}</Text>;
};
