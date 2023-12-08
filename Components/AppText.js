import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";


function AppText({ icon, ...otherProps }) {
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
      <Text style={styles.red} {...otherProps} />
    </View>
  );
}
   



const styles = StyleSheet.create({
container: {
  backgroundColor: "yellow",
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

export default AppText
