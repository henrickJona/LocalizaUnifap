import React, { Component } from 'react';
import { StyleSheet, Text, View,  Button, FlatList, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Content } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { getLightEstimationEnabled } from 'expo/build/AR';
import { createDrawerNavigator} from 'react-navigation-drawer'
import {
  SrcOverComposition,
  LinearGradient
} from 'react-native-image-filter-kit';

import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile } from 'react-native-maps';
import {TextInput} from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


 class TelaInformacao extends React.Component {
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
          
          <View>
          <View>
            <Image
            style={{width: '100%', height: 380}}
            source={require('./teste.jpg')}
          />
          </View>
        <View style={{position:'absolute', paddingTop:300, textAlign:'left', fontSize:30,paddingLeft:30, backgroundColor:'rgba(52, 52, 52, 0.4)', width:'100%'}}>
          <Text h1 bold style={estilo.titulo} >Teste</Text>
        </View>
          <View style={{paddingTop:15,backgroundColor:'#292a3f',borderBottomColor: '#333449',
    borderBottomWidth: 2, flex:1}}>
          <Text h1 bold style={{color:'white',
    
    fontSize:32, paddingLeft:30}} >Descrição</Text>
        </View>   
        <View style={{paddingTop:10,backgroundColor:'#292a3f'}}>
          <Text h1 bold style={{color:'white',
    
    fontSize:20, paddingLeft:30}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>  
        <View style={{paddingTop:20,backgroundColor:'#292a3f',borderBottomColor: '#333449',
    borderBottomWidth: 2, flex:1}}>
          <Text h1 bold style={{color:'white',
    
    fontSize:32, paddingLeft:30}} >Horários</Text>
        </View>  
        <View style={{paddingTop:10,backgroundColor:'#292a3f'}}>
          <Text h1 bold style={{color:'white',
    
    fontSize:20, paddingLeft:30, textAlign:'center'}} >Segunda-Sexta: 08:30 - 18:30</Text>
    <Text h1 bold style={{color:'white',
    
    fontSize:20, paddingLeft:30, textAlign:'center'}} >Sábado: 08:30 - 12:30</Text>
        </View>    
          </View>
        </KeyboardAwareScrollView>
      );
    }
    
  }
export default TelaInformacao
const estilo = StyleSheet.create({
  principal:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'center',
   
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
    color:'white',
    
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
    backgroundColor:'#292a3f'
    
  }

});