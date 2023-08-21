import React from 'react';
import {View, StyleSheet} from 'react-native';
//import ContadorV2 from './components/contador/ContadorV2';
import Diferenciar from './components/Diferenciar';
//import Pai from './components/indireta/Pai';
//import Pai from './components/Pai';
//import Botao from './components/Botao';
//import Contador from './components/Contador';
//import Titulo from './components/Titulo';
//import X, {Comp1, Comp2} from './components/Multi';
//import Primeiro from './components/Primeiro';
//import MinMax from './components/MinMax';
//import Aleatorio from './components/Aleatorio';

export default () => (
  <View style={style.App}>
    <Diferenciar />
    {/*
    <ContadorV2 />
     <Pai />
     <Pai />
     <Contador inicial={100}/>
     <Botao />
     <Titulo
      principal="Cadastro Produto"
      secundario="Tela de Cadastro do Produto"
    />
   <Aleatorio min={10} max={60}/>
    <MinMax min={3} max={20} />
    <MinMax min="1" max="94" />
    <X /> 
    <Comp1 />
    <Comp2 />
<Primeiro */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
