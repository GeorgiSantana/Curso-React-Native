import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
  };

  alterarQtdeNumeros(qtde) {
    this.setState({qtdeNumeros: qtde});
  }
  render() {
    return (
      <>
        <Text style={Estilo.txtG}>
          Gerador de Mega-Sena
          {this.props.qtdeNumeros}
        </Text>
        <TextInput
          placeholder="Qtde de Números"
          value={this.state.qtdeNemeros}
          onChangeText={qtde => this.alterarQtdeNumeros(qtde)}
        />
      </>
    );
  }
}
