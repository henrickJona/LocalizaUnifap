import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, TouchableOpacity, Dimensions, Keyboard, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Content,  Left, Right } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { getLightEstimationEnabled } from 'expo/build/AR';
import { createDrawerNavigator} from 'react-navigation-drawer';
import {createSwitchNavigator} from 'react-navigation';
import Entrar from './src/login';
import Principal from './src/Login_Realizado/principal';
import Cadastrar from './src/cadastrar';
import Mapa from './src/mapa';
import TelaInformacao from './src/telaInformacao';

import {createStackNavigator} from 'react-navigation-stack';
//import mapa from './src/mapa';

import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile,Marker, Callout } from 'react-native-maps';




const styles = StyleSheet.create({
   map: {
    width: 400,
    height: 800,
   },
   
});
const DrawerNavigator = createDrawerNavigator(
  {
    mapa: Mapa,
    Entrar: Entrar,
    Cadastrar: Cadastrar,
    Principal:Principal,
    
  },
  {
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(255,255,255,1)',
    overlayColor: 'rgba(52, 52, 52, 0.8)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#4d6273',
    },
  }
);

const NavStack = createStackNavigator({
  mapa: { 
      screen: DrawerNavigator,
      navigationOptions:{
        header:null
      },
  },
  ScreenTwo: { 
      screen: TelaInformacao,
      navigationOptions:{
        
        headerTransparent:true,
        headerTintColor:'white'
        
  },},
});
  
  
  const MainNavigation = createSwitchNavigator({
    HomeDrawer: DrawerNavigator,
    AuthStack: NavStack,
  })
  const appConatainer  = createAppContainer(MainNavigation)
  export default appConatainer


