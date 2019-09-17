import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Content } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { getLightEstimationEnabled } from 'expo/build/AR';
import { createDrawerNavigator} from 'react-navigation-drawer'
import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile } from 'react-native-maps';

 class Cadastrar extends React.Component {
    static navigationOpotions ={
      title: "cadastrar"
    }
    render(){
      return (
        <View>
            <Text>jogo</Text>
            
        </View>
      );
    }
    
  }
export default Cadastrar
