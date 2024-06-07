import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native"; 

const Inicio = () => {

  const navigation = useNavigation();

    return (
    <View style={ styles.container}>
      <Text style={styles.txtTitulo}>PAGINA DE INICIO</Text>

      <TouchableOpacity
        onPress={()=> navigation.navigate("Login")}>
          <LinearGradient
          colors={['#00C1BB','#005B58']}
          start={{x:0, y:0}}
          end={{x:1, y:1}}
          style={styles.btnNext}
          >
            <Text style={styles.txtNext}>Continuar</Text>
          </LinearGradient>

      </TouchableOpacity>

    </View>
    );
}
 
export default Inicio;


const styles = StyleSheet.create({
  container: {
    height:"100%",
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent:"space-evenly"
    },
    txtTitulo: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#34434D',
  
    },

    txtNext:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
    },

    btnNext: {
      borderRadius: 30,
      width: 219,
      height: 53,
      textAlign: 'center',
      padding:10,
    },
  });