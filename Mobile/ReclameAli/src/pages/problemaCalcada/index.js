import React from 'react';
import { View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {useFonts} from 'expo-font'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";


import Objeto from "../../img/imgsCalcada/objeto.png"
import Buraco from "../../img/imgsCalcada/buraco.png"
import Acessibilidade from "../../img/imgsCalcada/acessibilidade.png"


export default function Calcada() {

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
          <Text style={styles.title}>Problemas na calçada</Text>
        </View>
        <View style={styles.barraCabecalho}></View>
      </View>

      <View>
        <View>
          <Pressable style={styles.categoria}>
            <Image source={Objeto} style={{height:80, width:80}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:"#707070"}}>Objeto na calçada</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.categoria}>
            <Image source={Buraco} style={{height:80, width:80}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:"#707070"}}>Buracos e avarias</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.categoria}>
            <Image source={Acessibilidade} style={{height:80, width:80}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:"#707070"}}>Sem acessibilidade</Text>
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