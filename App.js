import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import AppButton from './Components/AppButton';
import AppTextInput from './Components/AppTextInput';
import AppText from './Components/AppText';
import CheckoutForm from './Screens/CheckoutForm.js';
import Map from './Screens/Map.js';


import { ProductsList } from "./Screens/ProductsList.js";
import { ProductDetails } from "./Screens/ProductDetails.js";
import { Cart } from "./Screens/Cart.js";
import { CartProvider } from "./CartContext.js";
import { CartIcon } from "./Components/CartIcon.js";


export default function App() {
  const Stack = createNativeStackNavigator();
     return (
      
      <CartProvider>
        <NavigationContainer>
          
          <Stack.Navigator initialRouteName='Login'
              screenOptions={{
                headerTintColor:'white',
                headerStyle:{
                  backgroundColor:'green',
                }
      }}
      ><Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({title: 'Categories', headerRight: () => <CartIcon navigation={navigation} />})} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Book Details', headerRight: () => <CartIcon navigation={navigation} />})} />
      <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Shopping Cart', headerRight: () => <CartIcon navigation={navigation} />})} />
         
      <Stack.Screen name="CheckoutForm" component={Cart} options={({navigation}) => ({title: 'CheckoutForm', headerRight: () => <CartIcon navigation={navigation} />})} />
          
          
       
      <Stack.Screen name="Login" component={LoginScreen} options={{
          title:'Home'}}/>
           <Stack.Screen name="Map" component={Map}/>
        
        
        
        
      
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
    
        );
      }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
