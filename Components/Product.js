import React from "react";
import { SafeAreaView, TextBase } from "react-native";
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";



export function Product({name, price,tag, image,description, onPress}){
    return(
        
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.name}>{name}</Text>
            <Image style={styles.image} source={image} />
            <View style={styles.infoContainer}>
               <Text style={styles.tag}> {tag}</Text>
                <Text style={styles.price}>$ {price}</Text>
                <Text style={styles.description}>{description}</Text>
                
            </View>
            
        </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create({
  card: {
      backgroundColor: ' white',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10',
      marginLeft:"20",
      padding:10,
      
    
      },
  image: {
      width: '60%',
      height:350,
      marginTop:10
    },
  infoContainer: {
      padding: 16 
    },
  name: {
      fontSize: 22,
      fontWeight: "800",
      color:"red",
      paddingBottom:10,
      
      },
  
   price: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
      alignItems:"center"
    },
   
    description: {
        fontSize: 16,
        fontWeight:"600",
        color: 'black',
        marginBottom: 14,
        
      },
      tag: {
        fontSize: 16,
        fontWeight: "800",
        color:"black",
        paddingBottom:5,
        
        },

})

