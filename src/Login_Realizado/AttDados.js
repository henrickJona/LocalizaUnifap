import React, { Component } from 'react';
import { StyleSheet, Text, View,  Button, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Content } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { getLightEstimationEnabled } from 'expo/build/AR';
import { createDrawerNavigator} from 'react-navigation-drawer'
import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile } from 'react-native-maps';
import {TextInput} from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


 class AttDados extends React.Component {
    static navigationOpotions ={
      
    }
    state = {
      usuario: '',
      senha:'',
      email:'',
      csenha:''
    };
    
    render(){
      return (
          
        <KeyboardAwareScrollView style={estilo.scroll}
        enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}>
          
          <View style={estilo.principal}>
            
            <Text h1 bold style={estilo.titulo}>Atualizar Dados</Text>
            <TextInput style={estilo.entrada}
              label='Usuário'
              value={this.state.usuario}
              onChangeText={usuario => this.setState({ usuario })}
            />
            <TextInput style={estilo.entrada}
              label='E-mail'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              label='Senha'
              style={estilo.entrada}
              secureTextEntry={true}
              value={this.state.csenha}
              onChangeText={csenha => this.setState({ csenha })}
            /> 
            <TextInput
              label='Repita a Senha'
              style={estilo.entrada}
              secureTextEntry={true}
              value={this.state.senha}
              onChangeText={senha => this.setState({ senha })}
            /> 
            <TouchableOpacity style={estilo.botao}>
              <Text style={estilo.botaoTexto}>Atualizar</Text>
            </TouchableOpacity>
            <Text  style={estilo.esqsenha}>Atualize sempre suas informações.</Text>
          </View>
        </KeyboardAwareScrollView>
      );
    }
    
  }
export default AttDados
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
    paddingTop:20,
    alignItems:'center'
  },
  scroll:{
    flex:1,
    paddingTop:70
  }

});