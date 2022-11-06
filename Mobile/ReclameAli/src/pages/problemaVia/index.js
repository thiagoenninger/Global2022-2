import React from 'react';
import { View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {useFonts} from 'expo-font'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";


import ObjetoVia from "../../img/imgsVia/objetoVia.png"
import ObraVia from "../../img/imgsVia/obraVia.png"
import Sinaleira from "../../img/imgsVia/sinaleiraOff.png"
import VeiculoVia from "../../img/imgsVia/veiculoVia.png"
import AnimalVia from "../../img/imgsVia/animalVia.png"

export default function Via() {

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
        <View style={styles.btnetxt}>
          <Ionicons 
            name="chevron-back" 
            size={36} color="#707070" 
            style={{marginRight:30}}
            onPress={() => navigate("Criar Aviso")}
            />
          <Text style={styles.title}>Problemas na via</Text>
        </View>
        <View style={styles.barraCabecalho}></View>
      </View>

      <View style={styles.containerLista}>
        <View>
          <Pressable style={styles.categoria}>
            <Image source={ObjetoVia} style={{height:60, width:60}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:"#707070"}}>Objeto na via</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.categoria}>
            <Image source={ObraVia} style={{height:60, width:60}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:"#707070"}}>Obra na via</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.categoria}>
            <Image source={Sinaleira} style={{height:60, width:60}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:"#707070"}}>Semáforo desligado</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.categoria}>
            <Image source={VeiculoVia} style={{height:60, width:60}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:"#707070"}}>Veículo parado na via</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.categoria}>
            <Image source={AnimalVia} style={{height:60, width:60}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:"#707070"}}>Animal na via</Text>
          </Pressable>
        </View>
      </View>
       
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  cabecalho:{
    width:"100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:40,
  },
  barraCabecalho:{
    width:"85%",
    marginTop: 20,
    marginBottom:20,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  title: {
    color: '#707070',
    fontSize: 28,
    fontWeight: 'bold',
  },
  btnetxt:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    marginRight:20
  },
  categoria:{
    width: 300,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin:15,
  }
})