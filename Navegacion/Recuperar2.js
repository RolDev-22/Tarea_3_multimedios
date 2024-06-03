import React from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, Image, TextInput, TouchableOpacity, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native"; 

export default function Recuperar2() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.ImageLog} source={require("../Images/image.png")} />

      <Text style={styles.txtTitulo}>Recuperar Cuenta</Text>
      <Text style={styles.txtSubtitulo}>Recuperar su cuenta</Text>
     
      <TextInput
        placeholder="Contraseña nueva"
        secureTextEntry={true}
        style={styles.txtInput}
      ></TextInput>

      <TextInput
        placeholder="Confirmar contraseña Contraseña"
        secureTextEntry={true}
        style={styles.txtInput}
      ></TextInput>

      <TouchableOpacity
       onPress={()=> navigation.navigate("Login")}
      >
        <Text style={styles.txtPass}>Iniciar Sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=> navigation.navigate("Login")}
      >
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLogin}
        >
          <Text style={styles.txtLogin}>Restablecer</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* <Button title='Iniciar Sesion' style={styles.btnLogin} /> */}

      <Text style={styles.txtCuenta}>No tiene cuenta</Text>
      <TouchableOpacity
       onPress={() => navigation.navigate("Registrarse")}
      >
        <Text style={styles.txtRegistrarse}>Registrarse</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      
    </View>
  ); //cierre de return
} //cierre de duntion App


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },

  ImageLog: {
    width:'100%',
  },

  txtTitulo: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#34434D",
    textAlign: "left",
    paddingLeft: 30,
  },

  txtSubtitulo: {
    fontSize: 20,
    fontWeight: "light",
    color: "gray",
    textAlign: "left",
    paddingLeft: 30,
    marginTop: 20,
  },

  txtInput: {
    width: "85%",
    height: 60,
    borderRadius: 30,
    paddingLeft: 30,
    marginTop: 30,
    marginLeft: 35,
    borderColor: "gray",
    color: "#000000",
    backgroundColor: "#F5F5F5",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 4,
    fontSize:17,
    textDecorationLine: "underline"
  },

  txtPass: {
    textAlign: "right",
    marginTop: 15,
    marginRight: 50,
    color: "#00C1BB",
    fontSize: 18,
  },

  btnLogin: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop: 30,
    marginLeft: 100,
    paddingTop: 10,
  },

  txtLogin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  txtCuenta: {
    textAlign: "center",
    justifyContent:"center",
    marginTop:20,
    color: "#00C1BB",
    fontSize: 15,
    alignItems: "center",
  },

  txtRegistrarse: {
    textAlign: "center",
    color: "#00C1BB",
    fontSize: 15,
    alignItems: "center",
    fontWeight: "bold",
  },
});