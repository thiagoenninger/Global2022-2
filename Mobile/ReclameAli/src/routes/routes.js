import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

import Home from "../pages/Home";
import Alertas from "../pages/Alertas";
import Conta from "../pages/minhaConta";
import Avisos from "../pages/criarAviso";
import ProblemaVia from "../pages/problemaVia";
import ProblemaCalcada from "../pages/problemaCalcada";
import Acidente from "../pages/Acidente";

import ObjetoNaVia from "../components/via/ObjetoNaVia"
import ObraNaVia from "../components/via/ObraNaVia"
import SemaforoOff from "../components/via/SemaforoOff"
import VeiculoParado from "../components/via/VeiculoParado"
import AnimalNaVia from "../components/via/AnimalNaVia"

import ObjetoCalcada from "../components/calcada/ObjetoCalcada"
import BuracoCalcada from "../components/calcada/BuracoCalcada"
import AcessibilidadeCalcada from "../components/calcada/AcessibilidadeCalcada"

import CriarNovoAviso from "../pages/novoAlerta"

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          backgroundColor: "#fff",
          borderTopWidth: 2,
          height: 60,
          paddingLeft: 10,
          paddingRight: 10,

          // bottom: 14,
          // left: 10,
          // right: 10,
          // elevation: 10,
          // borderRadius: 25,
          

          // shadowColor: "#000",
          // shadowOffset: {
          //   width: 0,
          //   height: -10,
          // },
          // shadowOpacity: 0.34,
          // shadowRadius: 6.27,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#2D93B4",
                    padding: 5,
                    width: 120,
                    height: 50,
                    borderRadius: 50,
                  }}
                >
                  <Ionicons name="location" size={24} color="#fff" />
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", marginLeft: 5 }}
                  >
                    Mapa
                  </Text>
                </View>
              );
            }
            return (
              <Ionicons name="location-outline" size={size} color="#2D93B4" />
            );
          },
        }}
      />

<Tab.Screen
        name="Novo Aviso"
        component={CriarNovoAviso}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#2D93B4",
                    padding: 5,
                    width: 110,
                    height: 50,
                    borderRadius: 50,
                  }}
                >
                  <Ionicons name="add-circle" size={24} color="#fff" />
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", marginLeft: 5 }}
                  >
                    Avisos
                  </Text>
                </View>
              );
            }
            return (
              <Ionicons name="add-circle-outline" size={size} color="#2D93B4" />
            );
          },
        }}
      />

      <Tab.Screen
        name="Conta"
        component={Conta}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#2D93B4",
                    padding: 5,
                    width: 120,
                    height: 50,
                    borderRadius: 50,
                  }}
                >
                  <Ionicons name="person" size={24} color="#fff" />
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    Conta
                  </Text>
                </View>
              );
            }
            return (
              <Ionicons name="person-outline" size={size} color="#2D93B4" />
            );
          },
        }}
      />

    </Tab.Navigator>
  );
}
