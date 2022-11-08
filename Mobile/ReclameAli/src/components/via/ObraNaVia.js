import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TextInput, Pressable } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';	

import {Ionicons} from "@expo/vector-icons"

import ObraVia from "../../img/imgsVia/obraVia.png"

export default function ObraNaVia() {

  const [bgColor, setBgColor] = useState('rgba(0,0,0,0.1)')

  const {navigate} = useNavigation()

  const [id, setId] = useState(null)
  const [titulo, setTitutlo] = useState('')
  const [comentario, setComentario] = useState('')

  const [lista, setLista] = useState([])
  const [counter, setCounter] = useState(0)
  
  // useEffect(() => {
  //   AsyncStorage.getItem('lista')
  //               .then((texto) =>{
  //                 let value = []
  //                 if(texto !== null) {
  //                   value = JSON.parse(texto)
  //                 }
  //                 setLista(value.lista)
  //                 setCounter(value.counter + 1) 
  //               })
  // }, [id])

  function criarAviso() {
    const tempLista = [...lista]
    if (id === "") {
      tempLista.push({id: counter, titulo, comentario})
      setCounter(counter + 1)
    } else {
      const indice = procurarPorId(id)
      if (indice != -1){
        tempLista.splice(indice, 1,{id, titulo, comentario})
      }
    }
    setLista(tempLista)
    setId("")
    setTitutlo("")
    setComentario("")

    AsyncStorage.setItem("lista", JSON.stringify({lista: tempLista, counter: counter}))
    console.log(tempLista)
  }

  function procurarPorId(id) {
    for (let i=0; i < lista.length; i++) {
      const obj = lista[i]
      if (obj.id === id) {
        return i
      }
    }
    return -1
  }

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.btnetxt}>
          <Ionicons 
            name="chevron-back" 
            size={36} color="#707070" 
            style={{marginRight:30}}
            onPress={() => navigate("ProblemaVia")}
            />
          <Text style={styles.title}>Obra na via</Text>
        </View>
        <View style={styles.barraCabecalho}></View>
        
      </View>
        <View style={{alignItems:"center", justifyContent:"center", padding:25, marginVertical:50}}>
          <View style={{display:"flex", flexDirection:"row", alignItems:"flex-start", marginBottom:30, justifyContent:"space-around"}}>
            <Image source={ObraVia} style={{height:60, width:60}}/>
            <TextInput
              placeholder='Título'
              style={{width:"75%", height:60, padding:10, fontSize:18, backgroundColor:"rgba(0,0,0,0.1)", borderRadius:15, marginLeft:15 }}
              value={titulo}
              onChangeText={setTitutlo}
            />
          </View>
          <TextInput
            multiline={true}
            numberOfLines={5}
            placeholder="Comentário"
            style={{width:"100%", height:200, textAlignVertical:"top", padding:10, fontSize:18, backgroundColor:"rgba(0,0,0,0.1)", borderRadius:15}}
            value={comentario}
            onChangeText={setComentario}
          />
        </View>
        <View style={{flex:1, alignItems:"center", justifyContent:"center", bottom:40}}>
          <Pressable
            style={{
              backgroundColor:bgColor,
              width:200,
              height:80,
              alignItems:"center",
              justifyContent:"center",

              borderWidth:3,
              borderColor:"#2D93B4",
              borderRadius:25
            }}
            // onPressIn={() => setBgColor('#2D93B4')}
            // onPressOut={() => setBgColor('rgba(0,0,0,0.1)')}
            onPress={() => criarAviso()}
          >
            <Text style={{fontSize:18, fontWeight:"bold", color:"#707070"}}>Enviar</Text>
          </Pressable>
        </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})