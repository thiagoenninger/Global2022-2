import React from 'react';
import { View, StyleSheet, Text, Image, Pressable, TouchableHighlight } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {useFonts} from 'expo-font'
import {useNavigation} from '@react-navigation/native'

import Via from "../../img/via.png"
import Calcada from "../../img/calcada.png"
import Acidente from "../../img/acidente.png"

export default function Aviso() {

  const [textColor1, setTextColor1] = React.useState('#707070')
  const [textColor2, setTextColor2] = React.useState('#707070')
  const [textColor3, setTextColor3] = React.useState('#707070')

  const {navigate} = useNavigation()

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
        <View>
          <Pressable 
            style={styles.containerCat}
            onPressIn={() => setTextColor1('#2D93B4')}
            onPressOut={() => setTextColor1('#707070')}
            onPress={() => navigate("ProblemaVia")}
          >
            <Image source={Via}/>
            <Text style={{color:textColor1, fontSize:22, fontWeight:"bold", fontFamily:"Montserrat", marginLeft:30}}>Problemas na via</Text>
          </Pressable>
        </View>
        <View>
          <Pressable 
            style={styles.containerCat}
            onPressIn={() => setTextColor2('#2D93B4')}
            onPressOut={() => setTextColor2('#707070')}
            onPress={() => navigate("ProblemaCalcada")}
            >
            <Image source={Calcada} />
            <Text style={{color:textColor2, fontSize:22, fontWeight:"bold", fontFamily:"Montserrat", marginLeft:30}}>Problemas na calçada</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={styles.containerCat}
            onPressIn={() => setTextColor3('#2D93B4')}
            onPressOut={() => setTextColor3('#707070')}
            onPress={() => navigate("Acidente")}
            >
            <Image source={Acidente}/>
            <Text style={{color:textColor3, fontSize:22, fontWeight:"bold", fontFamily:"Montserrat", marginLeft:30}}>Acidente de trânsito</Text>
          </Pressable>
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
})