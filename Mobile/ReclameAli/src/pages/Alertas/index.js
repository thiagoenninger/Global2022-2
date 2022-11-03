import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {useFonts} from 'expo-font'
import {useNavigation} from '@react-navigation/native'



export function Alertas() {

  const {navigate} = useNavigation();

  const [loaded] = useFonts({
    Montserrat: require('../../../assets/fonts/Montserrat.ttf'),
  })

  if(!loaded){
    return null;
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.title}>Lista de alertas</Text>
      </View>
    </View>
  );
}

export default Alertas

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  cabecalho:{
    padding:15,
  },
  title: {
    color: '#707070',
    fontSize: 28,
    fontWeight: 'bold',
  },
})