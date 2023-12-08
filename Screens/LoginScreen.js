import { StyleSheet, Text, View, Image, Navigation, } from 'react-native'
import React, {useState, useEffect} from 'react'
import { initializeApp } from "firebase/app";
import {  getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import AppButton from '../Components/AppButton'
import AppTextInput from '../Components/AppTextInput'
import AppText from '../Components/AppText'
import { Card } from 'react-native-paper'
import {useNavigation} from "@react-navigation/native";
import Autocomplete from 'react-native-autocomplete-input';
import { SafeAreaView } from 'react-native-safe-area-context';
import downloadImage from './Download';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWvUWNXxdPWK2OTRv36840lROiqGHyGiE",
  authDomain: "andy-8b5a8.firebaseapp.com",
  projectId: "andy-8b5a8",
  storageBucket: "andy-8b5a8.appspot.com",
  messagingSenderId: "989350960517",
  appId: "1:989350960517:web:8991adf779e89ea454b8ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


const LoginScreen = ({}) => {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const navigation = useNavigation()
  
  
  

  const handleSignIn = ()=>{
   
   
   
    
     signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
          navigation.navigate("Products")
        // ...
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
        
  }
  const handleSignUp = ()=>{
    
    
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => alert(error.message));
      
      useEffect(() => {    
        const loadEmail = async () => {
          try {
            const savedEmail = await AsyncStorage.getItem('savedEmail');
            if (savedEmail !== null) {
              setEmail(savedEmail);
            }
          } catch (error) {
            console.error("Error loading email from AsyncStorage:", error);
          }
        };
    
        loadEmail();
      }, []);
      
      
    
  }
  return (
   <SafeAreaView>
    <View >
    <Text style={styles.name}>Welcome to book lovers paradise!</Text>
   </View>


    <View >
    
          <Image 
                source={require("../assets/Logo.png")}style={styles.LogoImage}/>
                
   </View>

      <View>
       
        <AppTextInput placeholder="Enter your name here" icon="email"
        value={email}
        onChangeText={text=>setEmail(text)}
         />

        <AppTextInput placeholder="Enter your password here" icon="lock"
         value={password}
         onChangeText={text=>setPassword(text)}
         secureTextEntry 
        
        />
       
       <AppButton title="Login" onPress={handleSignIn}/>
       <AppButton title="Register" onPress={handleSignUp}/>
      <AppButton title='Location map' onPress={()=>navigation.navigate('Map')}/>

       
      </View>
      
    
</SafeAreaView>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
 
  name:{
      fontSize:20,
      fontWeight:"bold",
      marginBottom:10
      
      },
      
  
})