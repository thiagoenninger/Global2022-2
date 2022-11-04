import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {useFonts} from 'expo-font'

import Via from "../../img/via.png"
import Calcada from "../../img/calcada.png"
import Acidente from "../../img/acidente.png"

export default function Aviso() {

  const [loaded] = useFonts({
    Montserrat: require('../../../assets/fonts/Montserrat.ttf'),
  })

  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.title}>Criar um alerta</Text>
        <View style={styles.barraCabecalho}></View>
      </View>
      <View style={styles.categoria}>
        <View style={styles.containerCat}>
          <Image source={Via}/>
          <Text style={styles.text}>Problemas na via</Text>
        </View>
        <View style={styles.containerCat}>
          <Image source={Calcada} />
          <Text style={styles.text}>Problemas na calçada</Text>
        </View>
        <View style={styles.containerCat}>
          <Image source={Acidente}/>
          <Text style={styles.text}>Acidente de trânsito</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cabecalho:{
    width:"100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding:40,
  },
  barraCabecalho:{
    width:"95%",
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  title: {
    color: '#707070',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Montserrat'
  },
  categoria:{
    flex:1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding:15,
    marginTop:50
  },
  containerCat:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    padding:15,
    marginBottom:15,
  },
  text:{
    color:'#707070',
    fontSize:22,
    fontWeight:"bold",
    fontFamily:"Montserrat",
    marginLeft:30,
  },
})