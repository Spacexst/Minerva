import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";


function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={"black"}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.red} {...otherProps} />
    </View>
  );
}
   



const styles = StyleSheet.create({
container: {
  backgroundColor: "white",
  borderRadius: 25,
  flexDirection: "row",
  width: "70%",
  padding: 15,
  marginVertical: 10,
  alignSelf:"center",
  marginTop:20,
  marginBottom:20,
  borderWidth:2,
},
icon: {
  marginRight: 10,
},
TextInput:{
backgroundColor:"black",
fontSize:24,
fontWeight:"bold"


}

});

export default AppTextInput
