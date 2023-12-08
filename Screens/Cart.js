import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet} from "react-native";
import {CartContext} from "../CartContext";
import AppButton from "../Components/AppButton";
import CheckoutForm from "./CheckoutForm";


export function Cart({navigation}){
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
	

    function Totals(){
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.mainTotal}>$ {total}</Text>
            </View>
        )
    }
    function renderItem({item}){
      return(
		<View>
          
              <View style={styles.cartLine}>
                  <Image style={styles.image} source={item.product.image} />
                  <Text style={styles.lineLeft}>{item.product.name} x {item.qty} <Text style={styles.productTotal}>${item.totalPrice}</Text></Text>
			  </View>
          
		</View>
				  
      )
  }
  return(
	<View>
    <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
    />
	
   
	
	
	  </View>
			

)

}
const styles = StyleSheet.create({
	cartLine: {
		flexDirection: 'row',
		width: '80%',
		paddingVertical: 10
	},
	image: {
		width: '70%',
		height:300,
		marginRight: 5,
		marginTop:20
	},
	
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#gray',
		borderTopWidth: 1
	},
	productTotal: {
		fontWeight: 'bold'
	},
	lineTotal: {
		fontWeight: 'bold'
	},
	lineLeft: {
		fontSize: 20,
		lineHeight: 40,
		color: 'black',
		fontWeight:"bold"
	},
	lineRight: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
    textAlign: 'left',
	},
	mainTotal: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 40,
		color: 'black',
		textAlign: 'right',
		marginRight:15
	},
	itemsList: {
		backgroundColor: '#eeeeee'
	},
	itemsListContainer: {
		backgroundColor: 'white',
		paddingVertical: 10,
		marginHorizontal: 10,
		marginTop:20
	}
})