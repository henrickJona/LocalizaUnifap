import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, TouchableOpacity, Dimensions, Keyboard, TouchableWithoutFeedback, TouchableHighlight, Image } from 'react-native';
import {Container,Header,Left,Right,Radio } from 'native-base';
import MapView ,{ MAP_TYPES, PROVIDER_DEFAULT,UrlTile, Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import MapViewDirections from 'react-native-maps-directions';
import axios from "axios"
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
const GOOGLEMAPSAPIKEY = '5b3ce3597851110001cf62487c30f797a66349f3a54de3af28c85215';
 var coordinate=[];
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
	   
	   route: [],
	  
	  
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
	var aux = []
  this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
  this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
  this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  axios.get("https://api.openrouteservice.org/v2/directions/foot-walking?api_key=5b3ce3597851110001cf62487c30f797a66349f3a54de3af28c85215&start=-51.082908,-0.006254&end=-51.085605,-0.006954")
      .then(res => {
		//console.log("res.data");
		  //console.log(res.data.features[0].geometry.coordinates);
		 this.setState({route: res.data.features[0].geometry.coordinates})
		 
		//this.setState({route: res.data})
		
	  }).catch(function (error) {
		console.log("res");
		console.log(error);
	  });
	  
}
//pegaRotas(){
	//this.state.route.map((coordinates, index)=>{
		//const lat = coordinates.latitude
		//const longi = coordinates.longitude
		//const coord = [lat, longi]
		//this.renderRoute(coord, index)
		//console.log("entrou",coord)
	//})
//}

renderRoute (latitude,longitude, i) {
	
    return (
        <MapView.Polyline
          key={i}
          coordinates={latitude,longitude}
          strokeColor={"#000"}
          strokeWidth={4}
        />
    );
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
      
	{
	this.state.route.map((geometry,index)=>{
		
		const latitude =geometry[1]
		const longitude = geometry[0]
		coordinate.push ({latitude: latitude,longitude: longitude})
		
		//console.log(typeof coordinate);
		//console.log( coordinate);
		return (
			<Polyline
			  key ={index}
			  coordinates={ coordinate}
			  strokeColor={"red"}
			  strokeWidth={4}
			/>
		);
		
		
	})
	
	}
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
    {console.log( coordinate)}
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
