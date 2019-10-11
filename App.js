import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Content,  Left, Right } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { getLightEstimationEnabled } from 'expo/build/AR';
import { createDrawerNavigator} from 'react-navigation-drawer'
import Entrar from './src/login';
import Principal from './src/Login_Realizado/principal';
import Cadastrar from './src/cadastrar';
//import mapa from './src/mapa';

import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile,Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -0.0063376;
const LONGITUDE = -51.0848025;
const LATITUDE_DELTA = 0.018;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Inicio extends React.Component {
  static navigationOptions = {
    title: 'mapa',
    drawerLabel: 'Inicio',
   
};
constructor(props) {
   super(props);
     this.state = {
       region: {
         latitude: LATITUDE,
         longitude: LONGITUDE,
         latitudeDelta: LATITUDE_DELTA,
         longitudeDelta: LONGITUDE_DELTA,
       },
     };
 }
get mapType() {
   return this.props.provider === PROVIDER_DEFAULT ? MAP_TYPES.STANDARD : MAP_TYPES.NONE;
}
render() {
  return (
   <Container>
    
     
     <View style={{paddingTop:50, paddingLeft:20, paddingBottom:20, paddingRight:20, flexDirection:"row", justifyContent:"space-between",alignItems:"center", backgroundColor:"#7f7fff"}}>
          <Icon onPress={() => this.props.navigation.openDrawer()} name="bars" size={30} color="white" />
          <TextInput placeholder="Insira sua Busca!" placeholderTextColor="#7f7fff" style={{borderColor:'#e3e3e3', borderWidth:1, width:"80%", paddingLeft:20, height:45, backgroundColor:"white"}}/>
          
        
        </View>
     
    
    <View >
     <MapView
       region={this.state.region}
       provider={null}
       mapType={this.mapType}
       rotateEnabled={false}
       style={{flex: 1}}
       style={styles.map}
       showsUserLocation
       
       >
         <Marker
         
          
         coordinate={{ latitude: -0.0070825,longitude: -51.0845708}}
         pinColor={'#d62424'}
         title={"Hi"}
         
       />
       <UrlTile
urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
maximumZ={19}
/>
      </MapView>
     </View>
    </Container>
   );
  }
}


const styles = StyleSheet.create({
   map: {
    width: 400,
    height: 800,
   },
});

class TelaInicial extends Component{

  render(){
    return (
      
        <View style={{paddingTop:50, paddingLeft:20, paddingBottom:20, paddingRight:20, flexDirection:"row", justifyContent:"space-between",alignItems:"center", backgroundColor:"#7f7fff"}}>
          <Icon onPress={() => this.props.navigation.openDrawer()} name="bars" size={30} color="white" />
          <TextInput placeholder="Insira sua Busca!" placeholderTextColor="#CCCCFF" style={{borderColor:'#e3e3e3', borderWidth:1, width:"80%", paddingLeft:20, height:45, backgroundColor:"white"}}/>
          
        
        </View>
        
      
    );
  
  }
  }

  const DrawerNavigator = createDrawerNavigator(
    {
      mapa: Dashboard,
      Entrar: Entrar,
      Cadastrar: Cadastrar,
      Principal:Principal,
      
    },
    {
      hideStatusBar: false,
      drawerBackgroundColor: 'rgba(255,255,255,.9)',
      overlayColor: '#6b52ae',
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#6b52ae',
      },
    }
  );
  
  export default createAppContainer(DrawerNavigator);


