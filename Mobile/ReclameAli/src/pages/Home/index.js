import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native'

import {Ionicons} from '@expo/vector-icons'

import * as Location from 'expo-location';

const Home = (props) => {


  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      })();
    }, []);

    let text = 'Waiting..'
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  

  const [origem, setOrigem] = useState({
    latitude: -23.60384926819148,
    longitude:-46.67396521161799,
  })

  return (   
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: location ? location.coords.latitude : origem.latitude,
          longitude: location ? location.coords.longitude : origem.longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.004,
        }}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})
