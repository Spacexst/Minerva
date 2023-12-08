import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, navigation, } from "react-native";
import { getProduct } from '../services/ProductsService';
import {CartContext} from "../CartContext";
import AppButton from '../Components/AppButton';



export function ProductDetails({route}) {

    const {productId} = route.params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProduct(productId))
    })

    const {addItemToCart} = useContext(CartContext)

    function onAddToCart(){
      addItemToCart(product.id)
    }


  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={product.image} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.tag}> {product.tag}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <AppButton onPress={onAddToCart} title="Add To Cart" />
                
                
	  
			  
            </View>

            
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'left',
        justifyContent: 'center',
      backgroundColor: 'white',
      flexDirection:"row"
    },
    image: {
      width: '40%',
      height:250,
      marginTop:20,
      marginBottom:20,
      marginLeft:20

      
    },
    infoContainer: {
      padding: 15
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      alignSelf:"center",
      color:"red"
    },
    price: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 10,
      alignSelf:"center"
    },
    description: {
      fontSize: 16,
      fontWeight: "bold",
      color: 'black',
      marginBottom: 14,
      
    },
    tag: {
      fontSize: 16,
      fontWeight: "800",
      color:"black",
      paddingBottom:5,
      
      },
  });