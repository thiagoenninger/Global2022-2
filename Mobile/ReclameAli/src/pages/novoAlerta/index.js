import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import SelectList from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { Ionicons } from "@expo/vector-icons";

export default function NovoAlerta() {
  const [bgColor, setBgColor] = useState("rgba(0,0,0,0.1)");

  const { navigate } = useNavigation();

  const data = [
    {value: "Acidente na via"},
    {value: "Objeto na via"},
    {value: "Obra na via"},
    {value: "Semáforo desligado"},
    {value: "Veículo parado na via"},
    {value: "Animal morto na via"},
    {value: "Objeto na calçada"},
    {value: "Buraco na calçada"},
    {value: "Calçada sem acessibilidade"},
  ]

  const [id, setId] = useState('')
  const [titulo, setTitulo] = useState('')
  const [comentario, setComentario] = useState('')
  const [categoria, setCategoria] = useState('')

  const [lista, setLista] = useState([])
  const [counter, setCounter] = useState(0)

  function criarAviso() {
    const tempLista = [...lista]
    if(id === '') { 
      tempLista.push({id: counter, titulo, comentario, categoria})
      setCounter(counter + 1)
    } else {
      const indice = procurarPorId(id)
      if (indice != -1) {
        tempLista.splice(indice, 1,{id, titulo, comentario, categoria})
      }
    }
    setLista(tempLista)
    setId('')
    setTitulo('')
    setComentario('')
    setCategoria('')

    AsyncStorage.setItem("lista", JSON.stringify({lista:tempLista, counter: counter}))
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
        <Text style={styles.title}>Criar novo aviso</Text>
        <View style={styles.barraCabecalho}></View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 25,
          marginVertical: 50,
        }}
      >
        <View style={{flex:1, width:"100%", marginBottom:30, fontSize:18}}>
          <SelectList 
            setSelected={setCategoria} 
            data={data}
            search={false}
            placeholder="Selecione a categoria"
            />
          <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <Text style={styles.categoria}>Categoria:</Text>
            <Text
              style={styles.inputCategoria}
              value={categoria}
              onChange={setCategoria}
              >
              {categoria}
            </Text>
          </View>
        </View>

        <TextInput
          placeholder="Título"
          style={{
            width: "100%",
            height: 60,
            padding: 10,
            fontSize: 18,
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 15,
            marginBottom: 15,
          }}
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          multiline={true}
          numberOfLines={5}
          placeholder="Comentário"
          style={{
            width: "100%",
            height: 200,
            textAlignVertical: "top",
            padding: 10,
            fontSize: 18,
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 15,
          }}
          value={comentario}
          onChangeText={setComentario}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          bottom: 40,
        }}
      >
        <Pressable
          style={{
            backgroundColor: bgColor,
            width: 200,
            height: 80,
            alignItems: "center",
            justifyContent: "center",

            borderWidth: 3,
            borderColor: "#2D93B4",
            borderRadius: 25,
          }}
          onPressIn={() => setBgColor("#2D93B4")}
          onPressOut={() => setBgColor("rgba(0,0,0,0.1)")}
          onPress={() => criarAviso()}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#707070" }}>
            Cadastrar
          </Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabecalho: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  barraCabecalho: {
    width: "85%",
    marginVertical:15,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  title: {
    color: "#707070",
    fontSize: 28,
    fontWeight: "bold",
  },
  categoria:{
    color: "#707070",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 15,
  },
  inputCategoria:{
    color: "#707070",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 15,
    marginLeft:10,
    color:"#2D93B4"
  }
});
