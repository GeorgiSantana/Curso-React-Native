import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';
import estilo from '../estilo';
import React, {useState} from 'react';
import {Text} from 'react-native';

export default props => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={estilo.txtG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
};
