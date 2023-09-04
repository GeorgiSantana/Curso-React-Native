import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
//import DigiteSeuNome from './components/DigiteSeuNome';
import FlexV1 from './components/layout/FlexBoxV1';
//import UsuarioLogado from './components/UsuarioLogado';
//import ListaProdutos from './components/produtos/ListaProdutos';
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
//import Familia from './components/relacao/Familia';
//import Membro from './components/relacao/Membro';
//import ContadorV2 from './components/contador/ContadorV2';
//import Diferenciar from './components/Diferenciar';
//import ParImpar from './components/ParImpar';
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
  <SafeAreaView style={style.App}>
    <FlexV1 />

    {/*
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <UsuarioLogado usuario={{nome: 'Geo', email: 'geo@geo.com'}} />
    <UsuarioLogado usuario={{nome: 'Maria'}} />
    <UsuarioLogado usuario={{email: 'mar@mar.com'}} />
    <UsuarioLogado usuario={{nome: 'Maria', email: 'maria@geo.com'}} />

    
    <Familia>
      <Membro nome="Maria" sobrenome="Santana"/> 
      <Membro nome="Goergi" sobrenome="Santana"/> 
      <Membro nome="Maria" sobrenome="Luisa"/> 
    </Familia>

    <Familia>
      <Membro nome="Jose" sobrenome="Santana"/> 
      <Membro nome="Gustavo" sobrenome="Santana"/> 
      <Membro nome="Mirian" sobrenome="Luisa"/> 
    </Familia>


    
     <ParImpar num={3}/>
     <Diferenciar />
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
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
