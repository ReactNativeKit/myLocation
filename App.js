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

{/**
import React, { useEffect, useState } from "react"
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"
import Geolocation from "react-native-geolocation-service" 

const App = () => {
  const [location, setLocation] = useState(null) 

  const handleLocationPermission = async () => {
    let permissionCheck = ""
    if (Platform.OS === "ios") {
      permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

      if (permissionCheck === RESULTS.DENIED) {
        const permissionRequest = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        )
        permissionRequest === RESULTS.GRANTED
          ? console.warn("Location permission granted.")
          : console.warn("Location perrmission denied.")
      }
    }

    if (Platform.OS === "android") {
      permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

      if (permissionCheck === RESULTS.DENIED) {
        const permissionRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        )
        permissionRequest === RESULTS.GRANTED
          ? console.warn("Location permission granted.")
          : console.warn("Location perrmission denied.")
      }
    }
  }

  useEffect(() => {
    handleLocationPermission()
  }, [])

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setLocation({ latitude, longitude })
      },
      error => {
        console.log(error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {location && ( 
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default App
*/}