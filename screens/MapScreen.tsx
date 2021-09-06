import React from 'react'
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import Map from '../components/Map';

const MapScreen = () => {
   return (
      <View>
         <View style={tw`h-1/2 w-full border-4 border-red-400`}>
            <Map />
         </View>
         <View style={tw`h-1/2 w-full border-2 border-green-400`}>
            <Text style={{
               fontSize: 20,
               padding: 30
            }}>Map Screen</Text>
         </View>
      </View>
   )
}

export default MapScreen

