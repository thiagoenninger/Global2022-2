import React, {useState} from 'react';
import { View, StyleSheet, Text, Switch, Pressable } from 'react-native';

import {Ionicons} from '@expo/vector-icons';

export default function Conta() {

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = React.useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="settings" size={36} color="#fff" style={{marginTop:45}}/>
        <Text style={styles.textoHeader}>Configurações</Text>
      </View>
      
      <View style={styles.corpo}>
        <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <View style={{backgroundColor:"#2D93B4", borderRadius:50, width:50, height:50, alignItems:"center", justifyContent:"center", marginRight:20}}><Ionicons name={"person"} color="#fff" size={38}/></View>
          <Text style={styles.texto}>Meu nome</Text>
        </View>

        <View style={styles.barra}></View>

        <View style={styles.conteudo}>
          <Text style={{fontSize:18, color:"rgba(0,0,0,0.2)", marginBottom:20}}>Configurações da Conta</Text>
          <Pressable style={styles.categoria} onPress={() => alert('Men at work!')}>
            <Text style={styles.texto}> Editar Perfil</Text>
            <Ionicons name={'chevron-forward'} size={24} color="#707070"/>
          </Pressable>

          <Pressable style={styles.categoria} onPress={() => alert('Men at work!')}>
            <Text style={styles.texto}> Trocar a Senha</Text>
            <Ionicons name={'chevron-forward'} size={24} color="#707070"/>
          </Pressable>

          <View style={styles.categoria}>
            <Text style={styles.texto}> Notificações Push</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#2D93B4" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
          </View>

          <View style={styles.categoria}>
            <Text style={styles.texto}> Dark Mode</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#2D93B4" }}
                thumbColor={isEnabled2 ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
          </View>
        </View>
        <View style={styles.barra}></View>
        <Text style={{fontSize:18, color:"rgba(0,0,0,0.2)", marginBottom:20}}>Mais</Text>

        <Pressable style={styles.categoria} onPress={() => alert('Men at work!')}>
          <Text style={styles.texto}> Sobre nós</Text>
          <Ionicons name={'chevron-forward'} size={24} color="#707070"/>
        </Pressable>

        <Pressable 
          style={styles.categoria}
          onPress={() => alert('Men at work!')}
          >
          <Text style={styles.texto}> Políticas de Privacidade</Text>
          <Ionicons name={'chevron-forward'} size={24} color="#707070"/>
        </Pressable>

        <Pressable 
          style={styles.categoria}
          onPress={() => alert('Faça uma doação e pague um café para o desenvolvedor! PIX: luc.bado@gmail.com')}
          >
          <Text style={styles.texto}> Café para o desenvolvedor</Text>
          <Ionicons name={'cafe'} size={24} color="#707070"/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fff",
  },
  header:{
    width:"100%",
    height:300,
    position:"absolute",
    top:0,
    left:0,
    backgroundColor:"#2D93B4",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"flex-start",

    padding:15,
  },
  textoHeader:{
    color:"#fff",
    fontSize:24,
    marginLeft:10,
    marginTop:50
  },
  corpo:{
    flex:1,
    backgroundColor:"#fff",
    width:"90%",
    height:"80%",
    zIndex:10,
    position:"absolute",
    bottom:0,

    borderTopLeftRadius:15,
    borderTopRightRadius:15,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation:25,

    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",

    padding:30,
  },
  texto:{
    color:"#707070",
    fontSize:18,
  },
  barra:{
    width:"100%",
    borderBottomColor:"rgba(0,0,0,0.1)",
    borderBottomWidth:1,
    marginVertical:20
  },
  categoria:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:5
  },
})