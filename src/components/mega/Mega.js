import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Estilo from '../estilo';
import Numero from './Numero';

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
  
  //gerarNumeros = () => {
  //const numeros = Array(this.state.qtdeNumeros)
  //.fill()
  //.reduce(n => [...n, this.gerarNumeroNaoContido(n)], []);
  // this.setState({numeros});
  //};
  
  //Modo alternativo parar gerar numeros usando uma forma procedural
  gerarNumeros = () => {
    const {qtdeNumeros} = this.state;
    const numeros = [];

    for (let i = 0; i < qtdeNumeros; i++) {
      const n = this.gerarNumeroNaoContido(numeros);
      numeros.push(n);
    }

    numeros.sort((a, b) => a - b);
    this.setState({numeros});
  };

  exibirNumeros = () => {
    const nums = this.state.numeros
    return nums.map(num => {
      return <Numero num ={num} />
    })
  }

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

        <Button title="Gerar" 
        onPress={this.gerarNumeros}/>
         
         <View style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
         }}>
             {this.exibirNumeros()}
         </View>
        
    </>
    );
  }
}
