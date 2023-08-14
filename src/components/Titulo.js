import React from 'react';
import {Text} from 'react-native';
import estilo from './estilo';

export default props => (
  <>
    <Text style={estilo.txtG}>{props.principal}</Text>
    <Text>{props.secundario}</Text>
  </>
);
