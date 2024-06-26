import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import appFirebase from '../FirebaseConfig/ConfigFirebase';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(appFirebase)

export default function Registrarse(props) {
  const navigation = useNavigation();

  const inicioEstado = {
    nombreCompleto:'',
    email:'',
    clave:'',
  }
  
  const [estado, setEstado] = useState(inicioEstado);
  
  const HandleChangeText = (value,name) => {
    setEstado({...estado, [name]:value})
  }

  const RegistarUsuario = async()=>{
    //console.log(estado)
    try {
      await addDoc(collection(db, 'Usuarios'),{...estado})

      Alert.alert('Alerta', 'El usuario se registró con éxito')

      props.navigation.navigate('Login')
     
    } catch  {
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.ImageLog} source={require("../Images/image.png")} />

      <Text style={styles.txtTitulo}>Crear cuenta</Text>
      <Text style={styles.txtSubtitulo}>Ingrese los datos solicitados</Text>

      <TextInput
        placeholder="Nombre completo"
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value,'nombreCompleto')}
        value={estado.nombreCompleto}
      ></TextInput>

      <TextInput
        placeholder="Correo electrónico"
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value,'email')}
        value={estado.email}
      ></TextInput>

      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value,'clave')}
        value={estado.clave}
      ></TextInput>

      <TouchableOpacity
        onPress={()=> navigation.navigate("Login")}
      >
        <Text style={styles.txtPass}>
          Iniciar Sesión
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      //  onPress={() => navigation.navigate("Login")}
       onPress={RegistarUsuario}
       >
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLogin}
        >
          <Text style={styles.txtLogin}>Registrarse</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.txtCuenta}>Ya tiene una cuenta</Text>
      <TouchableOpacity
        onPress={()=> navigation.navigate("Recuperar")}
      >
        <Text style={styles.txtRegistrarse}>¿Has olvidado tu contraseña?</Text>
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
    width: "100%",
  },

  txtTitulo: {
    fontSize: 50,
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
    marginTop: 20,
    marginLeft: 35,
    borderColor: "gray",
    color: "#000000",
    backgroundColor: "#F5F5F5",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 4,
    fontSize: 17,
    textDecorationLine: "underline",
  },

  txtPass: {
    textAlign: "right",
    marginTop: 20,
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
    justifyContent: "center",
    marginTop: 20,
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
