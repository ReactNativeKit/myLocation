import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Permission, PERMISSION_TYPE} from './src/AppPermission';
import MapView, {Polyline, Marker} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

const dwarkaSec14 = {
  latitude: 28.6038,
  longitude: 77.0291,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
};

const dwarkaSec12 = {
  latitude: 28.5938,
  longitude: 77.0435,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
};

export default class App extends Component {
  componentDidMount () {
    Permission.checkPermission(PERMISSION_TYPE.location)
}

  render() {

    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
        initialRegion={dwarkaSec14}
        >
       <MapViewDirections
          origin={dwarkaSec14}
          destination={dwarkaSec12}
          apikey={"AIzaSyBbzEALufpsH8XvlVkmCodXpLsHM9zIzC0"} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
         <Polyline
        coordinates={[dwarkaSec14, dwarkaSec12]} //specify our coordinates
        strokeColor={"#000"}
        strokeWidth={3}
        lineDashPattern={[2]}
    />
      
        <Marker coordinate={dwarkaSec14} />
        <Marker pinColor='green' coordinate={dwarkaSec12} />
        <Marker pinColor='purple'
        coordinate={{
        latitude: 28.6007,
        longitude: 77.0296
    }} // VEGAS Mall Coordinates
  />
        </MapView>

</View>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});