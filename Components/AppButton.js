import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AppButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    
  )
}

export default AppButton

const styles = StyleSheet.create({
   buttonContainer:{
     width:"60%",
     height: 40,
     borderWidth: 2,
     borderRadius: 25,
     backgroundColor:"lightgreen",
     marginTop: 20,
     justifyContent: "center",
     alignItems:"center",
     alignSelf:"center"

   },
  buttonText:{
    textAlign: "center",
    fontSize:22,
    color: "black",
    fontWeight:"bold",




   }
 });