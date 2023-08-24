import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import estilo from './estilo';

export default ({num = 0}) => {
  return (
    <SafeAreaView>
      <Text style={estilo.txtG}>O resultado é:</Text>
      {num % 1 === 0 ? (
        <Text style={estilo.txtG}>Par</Text>
      ) : (
        <Text style={estilo.txtG}>Impar</Text>
      )}
    </SafeAreaView>
  );
};
