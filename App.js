/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView,{
Marker,
AnimatedRegion,
Polyline,  PROVIDER_GOOGLE } from 'react-native-maps';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      latitude: 0,
      longitude: 0,
      error:null
    }
  }
  componentDidMount=()=>{
    Geolocation.getCurrentPosition(position=>{
      this.setState({
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
        error:null
      });
    },
    error =>this.setState({error:error.message }),
    { enableHighAccuracy:true,timeout:20000,maximumAge:2000}
    );
  }

  render() {
  return (
    <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: this.state.latitude,
         longitude: this.state.longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
       <Marker coordinate={this.state}/>
    
     </MapView>
   </View>
    
    
  );
};
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
