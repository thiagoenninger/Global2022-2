import React from 'react';
import { View, StyleSheet, Text, Image, Pressable, TouchableHighlight} from 'react-native';
import {useFonts} from 'expo-font'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";


import Objeto from "../../img/imgsCalcada/objeto.png"
import Buraco from "../../img/imgsCalcada/buraco.png"
import Acessibilidade from "../../img/imgsCalcada/acessibilidade.png"


export default function Calcada() {

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
          <Pressable
            style={styles.categoria}
            onPressIn={() => setTextColor1('#2D93B4')}
            onPressOut={() => setTextColor1('#707070')}
            onPress={() => navigate("ObjetoCalcada")}
            >
            <Image source={Objeto} style={{height:80, width:80}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:textColor1}}>Objeto na calçada</Text>
          </Pressable>
        </View>

        <View>
          <Pressable 
            style={styles.categoria}
            onPressIn={() => setTextColor2('#2D93B4')}
            onPressOut={() => setTextColor2('#707070')}
            onPress={() => navigate("BuracoCalcada")}
            >
            <Image source={Buraco} style={{height:80, width:80}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:textColor2}}>Buracos e avarias</Text>
          </Pressable>
        </View>

        <View>
          <Pressable 
            style={styles.categoria}
            onPressIn={() => setTextColor3('#2D93B4')}
            onPressOut={() => setTextColor3('#707070')}
            onPress={() => navigate("AcessibilidadeCalcada")}
            >
            <Image source={Acessibilidade} style={{height:80, width:80}}/>
            <Text style={{marginLeft:35, fontSize:22, fontWeight:"bold", color:textColor3}}>Sem acessibilidade</Text>
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