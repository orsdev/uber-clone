import React from 'react'
import { View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';

const Stack = createNativeStackNavigator();

function CardStackNavigation() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
               headerShown: false
            }}
         />
         <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
               headerShown: false
            }}
         />
      </Stack.Navigator>
   );
}

const MapScreen = () => {
   return (
      <View>
         <View style={tw`h-1/2 w-full`}>
            <Map />
         </View>
         <View style={tw`h-1/2 w-full`}>
            <CardStackNavigation />
         </View>
      </View>
   )
}

export default MapScreen

