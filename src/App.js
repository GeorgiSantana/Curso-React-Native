import React from 'react';
import {View, StyleSheet} from 'react-native';
import Titulo from './components/Titulo';
//import X, {Comp1, Comp2} from './components/Multi';
//import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default () => (
  <View style={style.App}>
    <Titulo
      principal="Cadastro Produto"
      secundario="Tela de Cadastro do Produto"
    />
    {/*<Aleatorio min={10} max={60}/>
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
