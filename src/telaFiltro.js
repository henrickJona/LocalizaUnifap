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
import Picker from 'react-native-picker-select';
import PickerCheckBox from 'react-native-picker-checkbox';

const items = [
  {
    itemKey:1,
    itemDescription:'Administrativos'
    },
  {
    itemKey:2,
    itemDescription:'Serviços'
    },
  {
    itemKey:3,
    itemDescription:'Pesquisa e Extensão'
    },
  {
    itemKey:4,
    itemDescription:'Esporte e Lazer'
    },
  {
    itemKey:5,
    itemDescription:'Ensino/Graduações'
    }
];
 class TelaFiltro extends React.Component {
  handleConfirm(pItems){
    console.log('pItems =>', pItems);
  }
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
            <Text style={estilo.titulo}>
              Categorias
            </Text>
          
            </View>
            <View>
            <PickerCheckBox
            data={items}
            headerComponent={<Text style={{fontSize:25}} >items</Text>}
            OnConfirm={(pItems) => this.handleConfirm(pItems)}
            ConfirmButtonTitle='OK'
            DescriptionField='itemDescription'
            KeyField='itemKey'
            placeholder='Selecione os Itens'
            arrowColor='#4d6273'
            arrowSize={10}
            placeholderSelectedItems ='$count Iten(s)'
        />
            </View>
          </View>
        </KeyboardAwareScrollView>
      );
    }
    
  }
export default TelaFiltro
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
    color:'#4d6273',
    
    fontSize:32,
    paddingBottom:40, paddingLeft:30

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
    backgroundColor:'white'
    
  }

});