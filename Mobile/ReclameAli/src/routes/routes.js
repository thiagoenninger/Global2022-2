import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

import Home from "../pages/Home";
import Alertas from "../pages/Alertas";
import Conta from "../pages/minhaConta";
import Avisos from "../pages/criarAviso";
import ProblemaVia from "../pages/problemaVia";
import ProblemaCalcada from "../pages/problemaCalcada";
import Acidente from "../pages/Acidente";

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
          backgroundColor: "#fff",
          borderTopWidth: 0,

          bottom: 14,
          left: 10,
          right: 10,
          elevation: 10,
          borderRadius: 25,
          height: 60,
          paddingLeft: 10,
          paddingRight: 10,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
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
                    width: 90,
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
        name="Criar Aviso"
        component={Avisos}
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
        name="Alertas"
        component={Alertas}
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
                  <Ionicons name="alert-circle" size={32} color="#fff" />
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    Alertas
                  </Text>
                </View>
              );
            }
            return (
              <Ionicons
                name="alert-circle-outline"
                size={size}
                color="#2D93B4"
              />
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
                    width: 90,
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

      <Tab.Screen
        name="ProblemaVia"
        component={ProblemaVia}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            bottom: -100,
            backgroundColor: "rgba(219, 219, 219, 1)",
            position: "absolute",
          },
        }}
      />

      <Tab.Screen
        name="ProblemaCalcada"
        component={ProblemaCalcada}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            bottom: -100,
            backgroundColor: "rgba(219, 219, 219, 1)",
            position: "absolute",
          },
        }}
      />
      <Tab.Screen
        name="Acidente"
        component={Acidente}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            bottom: -100,
            backgroundColor: "rgba(219, 219, 219, 1)",
            position: "absolute",
          },
        }}
      />
    </Tab.Navigator>
  );
}
