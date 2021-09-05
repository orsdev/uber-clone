import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';


export type MainStackParamList = {
   Home: undefined;
   Map: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainStackNavigation() {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} options={{
            headerShown: false
         }} />
         <Stack.Screen name="Map" component={MapScreen} />
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