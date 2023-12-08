import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker, Circle, Polyline} from 'react-native-maps'

const Map = () => {
  return (
    <View>
        <MapView
          initialRegion={{
               latitude: -41.224419,
                longitude: 174.805756,
                latitudeDelta:.0005,
                longitudeDelta:.005
            
            }}
            style={{

                width:"100%",
                height: "100%"
            }}>
            <Marker
              coordinate={{
                latitude: -41.224419,
                longitude: 174.805756,
              }}
              title="Minerva Books"
              pinColor='green'
              
              ></Marker>
              <Circle
                 center={{
                    latitude: -41.224419,
                    longitude: 174.805756
                 }}
                 radius={20}
               ></Circle>
             </MapView>
      
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})