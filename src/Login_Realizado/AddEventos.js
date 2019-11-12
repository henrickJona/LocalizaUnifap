import React, { Component } from 'react';
import { StyleSheet, Text, View,  Button, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Content } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { getLightEstimationEnabled } from 'expo/build/AR';
import { createDrawerNavigator} from 'react-navigation-drawer'
import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile } from 'react-native-maps';
import {TextInput} from 'react-native-paper'
import DatePicker from 'react-native-datepicker'
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

  var currentDate = new Date().getDate().toString();
 class AddEventos extends React.Component {
    
    static navigationOpotions ={
      
    }
    state = {
      nome: '',
      data:'',
      email:'',
      csenha:'',
      dateBegin:'',
      dateEnd:'',
      local:''
    };
    
    render(){
      return (
          
        <KeyboardAwareScrollView style={estilo.scroll}
        enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}>
          
          <View style={estilo.principal}>
            
            <Text h1 bold style={estilo.titulo}>Adicionar Evento</Text>
            <TextInput style={estilo.entrada}
              label='Nome do Envento'
              value={this.state.nome}
              onChangeText={nome => this.setState({ nome })}
            />
            <DatePicker
        style={{width: 200}}
        dateBegin={this.state.dateBegin}
        mode="date"
        placeholder="Selecione a data de Inicio"
        format="DD-MM-YYYY"
        minDate={currentDate}
        
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(dateBegin) => {this.setState({dateBegin: dateBegin})}}
      />
            <DatePicker
        style={{width: 200}}
        dateEnd={this.state.dateEnd}
        mode="date"
        placeholder="Selecione a data do fim"
        format="DD-MM-YYYY"
        minDate={currentDate}
        
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(dateEnd) => {this.setState({dateEnd: dateEnd})}}
      />
       <RNPickerSelect
            placeholder={{label: 'Qual edificio?', value: null}}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'ru', value: 'ru' },
                { label: 'teste', value: 'teste' },
                { label: 'teste', value: 'teste' },
            ]}
        />
         <TextInput style={estilo.entrada}
              label='Local do evento'
              value={this.state.local}
              onChangeText={local => this.setState({ local })}
            />
            
            <TouchableOpacity style={estilo.botao}>
              <Text style={estilo.botaoTexto}>Adicionar</Text>
            </TouchableOpacity>
            <Text  style={estilo.esqsenha}>Os eventos são importantes para guiar os interessados nesses eventos.</Text>
          </View>
        </KeyboardAwareScrollView>
      );
    }
    
  }
export default AddEventos
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