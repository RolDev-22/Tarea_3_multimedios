import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Navegacion/Home";
import Login from "./Navegacion/Login";

//PARA CUANDO SE REQUIERE EL MENÚ DE NAVEGACIÓN ABAJAO SE UTILIZA ESTE CÓDIGO
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Entypo } from "@expo/vector-icons";//Exportar los icononos
// const TabNav = createBottomTabNavigator();
// function Tabs() {
//   return (
//     <TabNav.Navigator
//       initialRouteName="Login"
//       screenOptions={{
//         tabBarActiveTintColor: "green", //color de activación
//       }}
//     >
//       <TabNav.Screen
//         name="Login"
//         component={Stacks}
//         options={{
//           tabBarLabel: "Login", //se utiliza para asignar nombre a la opción del botón
//           tabBarIcon: ({ color, size }) => (
//             <Entypo name="login" size={24} color="black" /> //se utiliza renderizar el icon
//           ),
//           //tabBarBadge: 3, //se utiliza para las notificaciones
//           headerShown: false, //oculta el header
//         }}
//       />
//     </TabNav.Navigator>
//   );
// }


//CODIGO PARA NAVEGAR DIRECTAMENTE AL PRECIONAR BOTONES O ATAJOS

const Stack = createStackNavigator();
function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
