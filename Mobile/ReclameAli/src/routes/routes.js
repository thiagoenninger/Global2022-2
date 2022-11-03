import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Text, View } from "react-native";

import Home from "../pages/Home";
import Alertas from "../pages/Alertas";
import Conta from "../pages/minhaConta";

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Routes() {

  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
          position: 'absolute',
          backgroundColor:'#fff',
          borderTopWidth: 0,

          bottom: 14,
          left: 14,
          right: 14,
          elevation: 10,
          borderRadius: 25,
          height: 60,

          shadowColor:"#000",
          shadowOffset:{
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
        }
      }}  
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if(focused){
              return (
                  <View style={{
                      flexDirection:"row",
                      justifyContent:"center",
                      alignItems:"center",
                      backgroundColor:"#2D93B4",
                      padding: 5,
                      width: 100,
                      height: 50,
                      borderRadius:50,
                    }}
                  >
                    <Ionicons name="location" size={24} color="#fff"/>
                    <Text style={{color:"#fff", fontWeight:'bold', marginLeft:5}}>Mapa</Text>
                  </View>
                )
            }
            return <Ionicons name="location-outline" size={size} color="#2D93B4"/>
          }
        }} 
      />
      <Tab.Screen 
        name="Alertas" 
        component={Alertas} 
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if(focused){
              return (
                <View style={{
                  flexDirection:"row",
                  justifyContent:"center",
                  alignItems:"center",
                  backgroundColor:"#2D93B4",
                  padding: 5,
                  width: 150,
                  height: 50,
                  borderRadius:50,
                }}>
                  <Ionicons name="alert-circle" size={32} color="#fff"/>
                  <Text style={{color:"#fff", fontWeight:'bold', marginLeft:10}}>Alertas</Text>
                </View>
              )
            }
            return <Ionicons name="alert-circle-outline" size={size} color="#2D93B4" />
          }
        }} 
      />
      <Tab.Screen 
        name="Conta" 
        component={Conta}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if(focused){
              return (
                <View style={{
                  flexDirection:"row",
                  justifyContent:"center",
                  alignItems:"center",
                  backgroundColor:"#2D93B4",
                  padding: 5,
                  width: 100,
                  height: 50,
                  borderRadius:50,
                }}>
                  <Ionicons name="person" size={24} color="#fff"/>
                  <Text style={{color:"#fff", fontWeight:'bold', marginLeft:10}}>Conta</Text>
                </View>
              )
            }
            return <Ionicons name="person-outline" size={size} color="#2D93B4" />
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes