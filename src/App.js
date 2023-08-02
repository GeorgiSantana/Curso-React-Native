import React from 'react';
import {View, StyleSheet} from 'react-native';
//import X, {Comp1, Comp2} from './components/Multi';
//import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';

export default () => (
  <View style={style.App}>
    <MinMax min={3} max={20} />
    <MinMax min="1" max="94" />
    {/*<X />
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