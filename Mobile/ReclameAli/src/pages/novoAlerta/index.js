import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  FlatList
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import SelectList from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { Ionicons } from "@expo/vector-icons";


const ListaCadastro = (props) => {
  return(
    <View style={{flex:1, flexDirection:"column", alignItems:"center", marginVertical:5}}>
      <View style={{
          flex:1,
          width: "85%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 10,
          borderColor: "rgba(255,255,255,0.5)",
          borderWidth: 0.5,
          marginBottom: 10,
          padding: 10,
          backgroundColor:"#2D93B4",
        }}>
          <View>
            <View style={{display:"flex", flexDirection:"row", marginBottom:10}}>
              <Text style={{ color: "#e8e8e8", marginRight:10, fontSize:16 }}>
                id: <Text style={{color:"#fff"}}>{props.item.id}</Text>
              </Text>
              <Text style={{ color: "#e8e8e8", marginRight:10, fontSize:16 }}>
                Categoria: <Text style={{color:"#fff"}}>{props.item.categoria}</Text>
              </Text>
            </View>
            <View style={{display:"flex", flexDirection:"row"}}>
              <Text style={{ color: "#e8e8e8", marginRight:10, fontSize:16 }}>
                Título: <Text style={{color:"#fff"}}>{props.item.titulo}</Text>
              </Text>
              <Text style={{ color: "#e8e8e8", marginRight:10, fontSize:16 }}>
                Comentário: <Text style={{color:"#fff"}}>{props.item.comentario}</Text>
              </Text>
            </View>
          </View>
          <View>
            <Ionicons
              name="create-outline"
              size={24}
              color="#fff"
              style={{marginRight:10}}
              onPress={() => {props.onEdit(props.item.id)}}
            />
            <Ionicons
              name="trash-outline"
              size={24}
              color="#fff"
              style={{marginRight:10}}
              onPress={() => {props.onDelete(props.item.id)}}
            />
          </View>
      </View>
    </View>
  )
}


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

  useEffect(() => {
    AsyncStorage.getItem("lista").then(
      (texto) => {
        let value = []
        if (texto !== null) {
          value = JSON.parse(texto)
        }
        setLista(value.lista)
        setCounter(value.counter + 1)
      }
    )
  }, [id])

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

  function editAviso(id) {
    const indice = procurarPorId(id)
    if (indice != -1) {
      const obj = lista[indice]
      setId(obj.id)
      setTitulo(obj.titulo)
      setComentario(obj.comentario)
      setCategoria(obj.categoria)
    }
  }

  function deleteAviso(id) {
    const indice = procurarPorId(id)
    const tempLista = [...lista]
    tempLista.splice(indice, 1)
    setLista(tempLista)

    AsyncStorage.setItem("lista", JSON.stringify({lista:tempLista, counter: counter}))
  }

  const nomeBotao = (id !== "") ? "Editar" : "Criar"

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
          marginBottom: 5,
        }}
      >
        <View style={{flex:1, width:"100%", marginBottom:15, fontSize:18}}>
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
            marginBottom: 10,
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
            height: 150,
            textAlignVertical: "top",
            padding: 10,
            fontSize: 18,
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 10,
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
          marginBottom: 30,
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
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#707070" }}>
            {nomeBotao}
          </Text>
        </Pressable>
      </View>
      <View style={{flex:5}}>
          <FlatList
            data={lista}
            renderItem={(props) => <ListaCadastro {...props}
            onEdit={editAviso}
            onDelete={deleteAviso}/>}
          />
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
    paddingTop: 20,
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
    flex:1,
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
