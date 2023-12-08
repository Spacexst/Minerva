import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCWvUWNXxdPWK2OTRv36840lROiqGHyGiE",
  authDomain: "andy-8b5a8.firebaseapp.com",
  projectId: "andy-8b5a8",
  storageBucket: "andy-8b5a8.appspot.com",
  messagingSenderId: "989350960517",
  appId: "1:989350960517:web:8991adf779e89ea454b8ec"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const CheckoutForm = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
  
  
    const handleSubmit = async () => {
      // Validate the user input
      if (name &&
        email &&
        address &&
        city &&
        state &&
        zip &&
        country
      ) {
        // Create an object to store the delivery address details
        const deliveryAddress = {
          name,
          email,
        address,
        city,
        state,
        zip,
        country,
      };

      // Add the delivery address to the Firestore collection
      try {const docRef = await addDoc(
        collection(db, "deliveryAddresses"),
        deliveryAddress
      );
      // Display a success message
      alert(`Your delivery address has been saved with ID: ${docRef.id}`);
    } catch (error) {
      // Display an error message
      alert(`Error adding document: ${error}`);
    }
  } else {
    // Display a warning message
    alert("Please fill in all the fields");
  }
};return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        value={zip}
        onChangeText={setZip}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

// Define some styles for the form
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});


export default CheckoutForm;