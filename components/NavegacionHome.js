import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import Inicio from "../Navegacion/Inicio";
import EditarPerfil from "../Navegacion/EditarPerfil";

const TabNav = createBottomTabNavigator();

function TabsHome() {
  return (
    <TabNav.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: "green", //color de activación
        tabBarInactiveTintColor: "blue",
      }}
    >
      <TabNav.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarLabel: "Inicio", //se utiliza para asignar nombre a la opción del botón
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" size={24} color="black" /> //se utiliza renderizar el icon
          ),
          //tabBarBadge: 3, //se utiliza para las notificaciones
          headerShown: false, //oculta el header
        }}
      />

      <TabNav.Screen
        name="EditarPerfil"
        component={EditarPerfil}
        options={{
          tabBarLabel: "EditarPerfil", //se utiliza para asignar nombre a la opción del botón
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-edit" size={24} color="black" /> //se utiliza renderizar el icon
          ),
          //tabBarBadge: 3, //se utiliza para las notificaciones
          headerShown: false, //oculta el header
        }}
      />
    </TabNav.Navigator>
  );
}

export default function NavegacionHome() {
  return <TabsHome />;
}
