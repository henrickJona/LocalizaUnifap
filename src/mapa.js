import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, TouchableOpacity, Dimensions, Keyboard, TouchableWithoutFeedback, TouchableHighlight, Image } from 'react-native';
import {Container,Header,Left,Right,Radio } from 'native-base';
import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile, Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import MapViewDirections from 'react-native-maps-directions';
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
const GOOGLEMAPSAPIKEY = 'AIzaSyDdlGjIooC19sraF4_xSjiS_uw4VIIOQoU';
class Mapa extends React.Component {
  static navigationOptions = {
    title: 'mapa',
    drawerLabel: 'Mapa',
    drawerIcon: (
      <Image
        style={{ width: 24, height: 24 }}
        source={require("./mapIcon.png")}
      />
    ),
   
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
       
       rotateEnabled={false}
       
       style={styles.map}
       showsUserLocation
      
       >
      {/* passarela principal*/}  
      <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.00627 ,longitude: -51.08268 },
      { latitude: -0.00629, longitude:-51.08455 },
      { latitude: -0.008995, longitude:-51.084556 },
      { latitude: -0.008995, longitude:-51.084702 },
      { latitude: -0.009187, longitude:-51.084741 },
      { latitude: -0.009208, longitude: -51.084899 },
      { latitude: -0.008983,  longitude:-51.085225 },
      
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  {/* continuação passarela principal*/}  
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.009091,  longitude: -51.085090 },
      { latitude: -0.009226 , longitude:-51.085186 },
      { latitude: -0.009194,  longitude:-51.085237 },
      { latitude: -0.009222,  longitude:-51.085260 },
      { latitude: -0.009222,  longitude:-51.085435 },
      { latitude: -0.009083,  longitude: -51.085653 },
      { latitude: -0.009332,   longitude:-51.085844, },
      
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>

 {/* blocos da saude*/}  
 <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.009796,   longitude: -51.086177 },
      { latitude: -0.009539,  longitude:-51.086810  },
      { latitude: -0.009524,   longitude:-51.087021 },
      { latitude: -0.009469,  longitude:-51.087066 },
      { latitude: -0.009470,  longitude: -51.087329 },
      { latitude: -0.009308,   longitude: -51.087342 },
      { latitude: -0.009302,    longitude:-51.088555 },
      
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.009734,     longitude: -51.086364 },
      { latitude: -0.010009,   longitude:-51.086385  },
      
      
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.009536,   longitude: -51.086858 },
      { latitude: -0.010022,   longitude:-51.086895  },
      
      
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>

<Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.009824,   longitude: -51.087782 },
      { latitude: -0.009865,   longitude:-51.087783  },
      
      
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>

<Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.009295,    longitude: -51.088259 },
      { latitude: -0.009665,   longitude:-51.088268  },
      { latitude: -0.009667,   longitude:-51.088326  },
      
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>

<Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.009301,    longitude: -51.088551 },
      { latitude: -0.009425,    longitude:-51.088554  },
      { latitude: -0.009421,    longitude:-51.088426  },
      { latitude: -0.009424,     longitude:-51.088625 },
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.009460,     longitude: -51.088741 },
      { latitude:-0.009460,     longitude:-51.088991  },
      
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.006277 ,longitude:-51.083438 },
      { latitude: -0.005806, longitude:-51.083435 }
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>     

  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.005339, longitude:-51.083262 },
      { latitude: -0.004805 , longitude:-51.083264},
      { latitude: -0.004674 , longitude:-51.083167},
      { latitude: -0.004299 , longitude:-51.083356},
      { latitude: -0.004455 , longitude:-51.083642},
      { latitude: -0.004544, longitude:-51.083705},
      { latitude: -0.004551,  longitude:-51.083747}
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>     

{/* Pós graduação*/} 
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.008847,  longitude:-51.084172 },
      { latitude: -0.008844,   longitude:-51.084026},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>     
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.008852,   longitude:-51.083888 },
      { latitude:-0.008749,    longitude:-51.083705},
      { latitude:-0.008752,     longitude:-51.083641},
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>    
  <Polyline style={{position:'absolute'}}
		coordinates={[
			
      { latitude:-0.008616,      longitude:-51.0835113},
      { latitude:-0.008357,      longitude:-51.083507},
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>  

 

{/* Restaurante universitario*/} 
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.008212,  longitude:-51.084391 },
      { latitude: -0.008226,  longitude:-51.083972},
      { latitude: -0.008201,   longitude:-51.083912},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/> 

  {/* ligação dos prédios da rua principal*/} 
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.008314,  longitude: -51.084553 },
      { latitude: -0.008313,   longitude:-51.084601},
     
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>  
   <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.008106, longitude: -51.084550 },
      { latitude: -0.008104,    longitude:-51.084593},
     
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>

<Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.007867,  longitude: -51.084546 },
      { latitude: -0.007870,     longitude:-51.084593},
     
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>

<Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.007380,   longitude: -51.084544 },
      { latitude: -0.007378,   longitude:-51.084593},
     
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.007111,    longitude: -51.084545 },
      { latitude: -0.007098,    longitude:-51.085012},
      { latitude: -0.007284,   longitude:  -51.085213 },
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.006953,     longitude: -51.084828},
      { latitude: -0.007272,   longitude:-51.084827},
     
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>

<Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.004158,     longitude: -51.083751},
      { latitude: -0.004850,    longitude:-51.083745},
     
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>

<Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.006191,   longitude: -51.083864},
      { latitude: -0.005054,   longitude:-51.083872},
     
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.004151,    longitude: -51.083874},
      { latitude: -0.003198,    longitude:-51.083881},
      { latitude: -0.003195,     longitude:-51.084529},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.003090,   longitude:  -51.084501},
      { latitude: -0.003102,     longitude:-51.085221},
        
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.003122,    longitude:  -51.083909},
      { latitude: -0.002941,      longitude:-51.083910},
        
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.005404,  longitude:   -51.083873},
      { latitude: -0.005396,   longitude:-51.083981},
      { latitude: -0.005348,  longitude:-51.083981},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.005348,   longitude:   -51.084273},
      { latitude: -0.005508,    longitude:-51.084274},
      { latitude: -0.005510,   longitude:-51.084321},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
     <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.005530,    longitude:-51.084529},
      { latitude: -0.005593,     longitude:-51.084532},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.005683,    longitude: -51.084774},
      { latitude: -0.005692,   longitude:-51.084843},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
   <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.005715,    longitude:  -51.084532},
      { latitude: -0.006205,   longitude:-51.084537},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.005947,   longitude:  -51.084537},
      { latitude: -0.005952,    longitude:-51.084827},
      { latitude: -0.005655,   longitude:-51.085314},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.005711,    longitude: -51.085013},
      { latitude: -0.005769,     longitude:-51.085011},
      { latitude: -0.005825,    longitude:-51.085045},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude: -0.005738,    longitude: -51.085191},
      { latitude: -0.005848,     longitude:-51.085239},
      { latitude: -0.005927,   longitude:-51.085324},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006107,    longitude: -51.085305},
      { latitude: -0.006201,    longitude:-51.085389},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006460,     longitude: -51.085292},
      { latitude: -0.006518,   longitude:-51.085347},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006614, longitude: -51.085433},
      { latitude: -0.006661,  longitude:-51.085491},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006775,  longitude: -51.085599},
      { latitude: -0.006837,  longitude:-51.085663},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006775,  longitude: -51.085599},
      { latitude: -0.006837,  longitude:-51.085663},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006850,   longitude: -51.085473},
      { latitude: -0.006892,   longitude:-51.085429},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007010,    longitude: -51.085631},
      { latitude: -0.007043,   longitude:-51.085597},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007169,     longitude: -51.085790},
      { latitude: -0.007219,  longitude:-51.0857403},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007384,      longitude: -51.085300},
      { latitude: -0.007629,  longitude:-51.085540},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007462,   longitude:-51.085501},
      { latitude: -0.007565, longitude:-51.085397},
      
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>

<Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007708,   longitude:-51.085619},
      { latitude: -0.007862,  longitude:-51.085769},
      { latitude: -0.007835, longitude:-51.085795},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007430,   longitude:-51.085901},
      { latitude: -0.007901,  longitude:-51.086361},
      { latitude: -0.007877, longitude:-51.086382},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007557,   longitude:-51.086065},
      { latitude: -0.007611,  longitude:-51.086010},
   
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007740,   longitude:-51.086200},
      { latitude: -0.007715,  longitude:-51.086227},
   
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007728,    longitude:-51.085236},
      { latitude: -0.007857,   longitude:-51.085116},
      { latitude: -0.008100,  longitude:-51.085117},
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.007859,    longitude:-51.084961},
      { latitude:-0.007858,    longitude:-51.085116},
     
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006015,   longitude:-51.084040},
      { latitude:-0.006208,   longitude:-51.084041},
     
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006059,   longitude:-51.084473},
      { latitude:-0.006054,   longitude:-51.084535},
     
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006522,   longitude:-51.084542},
      { latitude:-0.006524,   longitude:-51.084592},
     
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
  <Polyline style={{position:'absolute'}}
		coordinates={[
			{ latitude:-0.006605,   longitude:-51.084542},
      { latitude:-0.006608,  longitude:-51.084594},
     
      
    
			
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={2}
	/>
       
       <MapView.Marker
                                coordinate={{ latitude: -0.0070825,longitude: -51.0845708}}
                                onCalloutPress={() => navigate('ScreenTwo')}>
                                
                                  <MapView.Callout >
                                      
                                          <View >
                                              <Text>teste</Text>
                                          </View>
                                      
                                    </MapView.Callout>
       </MapView.Marker>
       
       

      </MapView>
      
      <View  style={{paddingTop:50, paddingLeft:20, paddingBottom:20, paddingRight:20, flexDirection:"row",justifyContent:"space-between",alignItems:"center", backgroundColor:'rgba(0,0,0,0.0)',position: 'absolute', width:'100%'}}>
     <Icon onPress={() => this.props.navigation.openDrawer()} name="bars" size={40} color="#4d6273" />
     {this.state.show1 ? (
        <Icon onPress={this.ShowHideComponent } name="search" size={40} color="#4d6273"  />
       ) : null}
    
          {this.state.show ? (
              
                
            <Animatable.View animation='fadeInRight' style={{flexDirection:"row", justifyContent:"space-between",}}>
                <TextInput  autoFocus={true} placeholder="Insira sua Busca!" placeholderTextColor="#4d6273" style={{borderColor:'#e3e3e3', borderWidth:1, width:"80%", paddingLeft:15, height:40, backgroundColor:"white", shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,}}/><Icon name='filter' size={40}  color="#4d6273" onPress={() => navigate('ScreenThree')}/>
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
    width: '100%',
    height: '100%',
   },
   
});
