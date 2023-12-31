import React from 'react';
import {StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV2}>
      <Quadrado cor="#50d1f6" lado={20} />
      <Quadrado cor="#ff801a" lado={30} />
      <Quadrado cor="#dd22c1" lado={40} />
      <Quadrado cor="#8312ed" lado={50} />
      <Quadrado cor="#36c9a7" lado={60} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV2: {
    flexDirection: "row",
    width: '100%',
    height: 350,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    backgroundColor: '#000',
  },
});
