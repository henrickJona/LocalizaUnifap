import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Content } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { getLightEstimationEnabled } from 'expo/build/AR';
import { createDrawerNavigator} from 'react-navigation-drawer'
import {TextInput} from 'react-native-paper'

import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile } from 'react-native-maps';

class Entrar extends React.Component {
    static navigationOpotions ={
      title: "Entrar",
      
    }
    state = {
      usuario: '',
      senha:''
    };
    render(){
      return (
        <View style={estilo.principal}>
          
          <Text h1 bold style={estilo.titulo}>Entrar</Text>
          <TextInput style={estilo.entrada}
            label='Usuário'
            value={this.state.usuario}
            onChangeText={usuario => this.setState({ usuario })}
          />
          <TextInput
            label='Senha'
            style={estilo.entrada}
            secureTextEntry={true}
            value={this.state.senha}
            onChangeText={senha => this.setState({ senha })}
          /> 
          
            <TouchableOpacity style={estilo.botao}>
                <Text style={estilo.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
          
          
            <TouchableOpacity style={estilo.esqsenha}>
              <Text  style={estilo.esqsenha}>Esqueceu a Senha?</Text>
            </TouchableOpacity>
          
        </View>
      );
    }
    
  }
export default Entrar
const estilo = StyleSheet.create({
  principal:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor:'white'
  },
  entrada:{
    
    borderBottomWidth: 0,
    marginBottom: 10,
    borderRadius: 2,
    paddingVertical: 5,
    width: '100%',
    backgroundColor:'white'
    
  },
  titulo:{
    color:'#7f7fff',
    
    fontSize:32,
    paddingBottom:40

  },
  botao:{
    borderBottomWidth: 0,
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 10,
    width: '50%',
    backgroundColor:'#7f7fff',
    height:40,
    
  },
  botaoTexto:{
    textAlign:'center',
    fontSize:20,
    color:'white'
    
  },
  esqsenha:{
    paddingTop:20
  }

});