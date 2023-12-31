import React from 'react';
import {StyleSheet, View} from 'react-native';

export default props => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V1} />
      <View style={style.V0} />
      <View style={style.V2} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },

  V0: {
    height: 0,
    backgroundColor: '#36c9a7',
  },

  V1: {
    flexGrow: 5,
    backgroundColor: '#ff801a',
  },

  V2: {
    flexGrow: 5,
    backgroundColor: '#dd22c1',
  },
});
