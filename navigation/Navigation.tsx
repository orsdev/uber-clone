import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function MainStackNavigation() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
               headerShown: false
            }} />
         <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{
               headerShown: false
            }} />
      </Stack.Navigator>
   );
}


function Navigation() {
   return (
      <NavigationContainer>
         <MainStackNavigation />
      </NavigationContainer>
   );
}

export default Navigation;