import React from 'react';
import {View} from 'react-native';

export default props => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 20,
        width: 20,
        backgroundColor: props.cor || '#000',
      }}
    />
  );
};
