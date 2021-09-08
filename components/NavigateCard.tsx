import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

import GooglePlacesInput from './GooglePlaceInput';
import NavFavorite from './NavFavorite';


const NavigateCard = () => {
   const navigation: any = useNavigation();

   return (
      <SafeAreaView style={tw`bg-white flex-1 px-5`}>
         <Text style={tw`text-center py-5 text-xl`}>Hi, Samuel</Text>
         <View style={tw`border-t border-gray-200 flex-shrink`}>
            <GooglePlacesInput
               placeholder="Where to?"
               destination="To" />
            <NavFavorite />
         </View>
         <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
            <TouchableOpacity
               style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}
               onPress={() => {
                  navigation.navigate('RideOptionCard');
               }}
            >
               <Icon
                  name="car"
                  type="font-awesome"
                  color="white"
                  size={16} />
               <Text style={tw`text-white text-center ml-1`}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => {
                  Alert.alert(
                     "Notice!",
                     "Under Construction.",
                     [
                        {
                           text: "Close",
                           style: "cancel"
                        }
                     ]
                  );
               }}
               style={tw`flex flex-row w-24 px-4 py-3 rounded-full`}>
               <Icon
                  name="fast-food-outline"
                  type="ionicon"
                  color="black"
                  size={16} />
               <Text style={tw`text-center ml-1`}>Eats</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>

   )
}

export default NavigateCard;

