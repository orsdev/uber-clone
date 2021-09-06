import React from 'react'
import { Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import GooglePlacesInput from './GooglePlaceInput';


const NavigateCard = () => {
   return (
      <SafeAreaView style={tw`bg-white flex-1`}>
         <Text style={tw`text-center py-5 text-xl`}>Good Morning, Samuel</Text>
         <View style={tw`border-t border-gray-200 flex-shrink`}>
            <GooglePlacesInput placeholder="Where to?" />
         </View>
      </SafeAreaView>

   )
}

export default NavigateCard;

