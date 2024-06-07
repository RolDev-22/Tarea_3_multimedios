import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

const EditarPerfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.ImageLog} source={require("../Images/image.png")} />

      <Text style={styles.txtTitulo}> Editar Perfil</Text>

      <View style={styles.contOpctions}>
        <Text style={styles.txtDatos}>Su Nombre</Text>
        <Text style={styles.txtDatos}>Su Correo</Text>
        <Text style={styles.txtDatos}>Contraseña</Text>
        <Text style={styles.txtDatos}>Fecha</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnNext}
        >
          <Text style={styles.txtNext}>Continuar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default EditarPerfil;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingBottom: 20,
    justifyContent: "flex-start",
  },
  txtTitulo: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#34434D",
  },
  ImageLog: {
    width: "100%",
  },
  contOpctions:{
    width:"75%",
    height:250,
    marginBottom:60,
    marginTop:40,
    justifyContent:"space-between"
  },
  txtDatos: {
    fontSize: 25,
  },
  txtNext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  btnNext: {
    borderRadius: 30,
    width: 219,
    height: 53,
    textAlign: "center",
    padding: 10,
  },
});
