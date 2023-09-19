import React, {Component} from 'react';
import {Button, Text, TextInput} from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumeros = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], []);
    this.setState({numeros});
  };

  render() {
    return (
      <>
        <Text style={Estilo.txtG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{borderBottomWidth: 1}}
          placeholder="Qtde de Números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumeros}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <Text>{this.state.numeros.join(' , ')}</Text>
      </>
    );
  }
}
