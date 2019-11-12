import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, TouchableOpacity, Dimensions, Keyboard, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import {Container,Header,Left,Right,Radio } from 'native-base';
import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');
const DismissKeyboard =({children})=>(
  <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)
const ASPECT_RATIO = width / height;
const LATITUDE = -0.0063376;
const LONGITUDE = -51.0848025;
const LATITUDE_DELTA = 0.018;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Mapa extends React.Component {
  static navigationOptions = {
    title: 'mapa',
    drawerLabel: 'Inicio',
   
};
constructor(props) {
   super(props);
     this.state = {
       show:false,
       show1:true,
       region: {
         latitude: LATITUDE,
         longitude: LONGITUDE,
         latitudeDelta: LATITUDE_DELTA,
         longitudeDelta: LONGITUDE_DELTA,
       },
     };
 }
 ShowHideComponent = () => {
  
  if (this.state.show == true) {
    this.setState({ show: false });
    
  } else {
    this.setState({ show: true });
    this.setState({ show1: false });
  }
};
state(){
  searchBarFocused:false;
}
componentDidMount(){
  this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
  this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
  this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
}
keyboardDidShow= ()=>{
  this.setState({ show1: false });
  this.setState({searchBarFocused:true})
  
} 
keyboardWillShow =()=>{
  this.setState({ show1: false });
  this.setState({searchBarFocused:true})
  
}
keyboardWillHide =()=>{
 
  this.setState({ show1: true });
  this.setState({ show: false });
  this.setState({searchBarFocused:false})
  
}
keyboardDidHide =()=>{
  
  this.setState({ show1: true });
  this.setState({ show: false });
  this.setState({searchBarFocused:false})
  
}
get mapType() {
   return this.props.provider === PROVIDER_DEFAULT ? MAP_TYPES.STANDARD : MAP_TYPES.NONE;
}
render() {
  const {navigate} = this.props.navigation;
  return (
    <DismissKeyboard>
   
    
     <View>
     
     
    
    
 
     <MapView
       region={this.state.region}
       provider={null}
       mapType={this.mapType}
       rotateEnabled={false}
       style={{flex: 1}}
       style={styles.map}
       showsUserLocation
       
       >
       
       <MapView.Marker
                                coordinate={{ latitude: -0.0070825,longitude: -51.0845708}}
                                onCalloutPress={() => navigate('ScreenTwo')}>
                                
                                  <MapView.Callout >
                                      
                                          <View >
                                              <Text>teste</Text>
                                          </View>
                                      
                                    </MapView.Callout>
                                </MapView.Marker>
       <UrlTile
urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
maximumZ={19}
/>
      </MapView>
      <View  style={{paddingTop:50, paddingLeft:20, paddingBottom:20, paddingRight:20, flexDirection:"row",justifyContent:"space-between",alignItems:"center", backgroundColor:'rgba(0,0,0,0.0)',position: 'absolute', width:'100%'}}>
     <Icon onPress={() => this.props.navigation.openDrawer()} name="bars" size={40} color="#4d6273" />
     {this.state.show1 ? (
        <Icon onPress={this.ShowHideComponent } name="search" size={40} color="#4d6273"  />
       ) : null}
    
          {this.state.show ? (
              
                
            <Animatable.View animation='fadeInRight' style={{flexDirection:"row", justifyContent:"space-between",}}>
                <TextInput  autoFocus={true} placeholder="Insira sua Busca!" placeholderTextColor="#4d6273" style={{borderColor:'#e3e3e3', borderWidth:1, width:"85%", paddingLeft:20, height:40, backgroundColor:"white", shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,}}/>
            </Animatable.View>
            
                
              
              ) : null}
          
          
          
        
        
     </View>
     </View>
    </DismissKeyboard>
   );
  }
}
export default Mapa

const styles = StyleSheet.create({
   map: {
    width: 400,
    height: 800,
   },
   
});
