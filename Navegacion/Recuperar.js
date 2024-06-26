import React from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, Image, TextInput, TouchableOpacity, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native"; 

export default function Recuperar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.ImageLog} source={require("../Images/image.png")} />

      <Text style={styles.txtTitulo}>Recuperar Cuenta</Text>
      <Text style={styles.txtSubtitulo}>Ingrese su correo electrónico para recuperar cuenta:</Text>
     
      <TextInput
        placeholder="multimedios@gmail.com"
        style={styles.txtInput}
      ></TextInput>

      <TouchableOpacity
       onPress={()=> navigation.navigate("Login")}
      >
        <Text style={styles.txtSesion}>Iniciar Sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity
         onPress={()=> navigation.navigate("Recuperar2")}
      >
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLogin}
        >
          <Text style={styles.txtLogin}>Continuar</Text>
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
    width:"70%",
    fontSize: 20,
    fontWeight: "light",
    color: "gray",
    textAlign: "left",
    paddingLeft: 30,
    marginTop: 60,
  },

  txtInput: {
    width: "75%",
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

  txtSesion: {
    textAlign: "right",
    marginTop: 15,
    marginRight: 50,
    color: "#00C1BB",
    fontSize: 16,
  },

  btnLogin: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop: 40,
    marginLeft: 110,
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