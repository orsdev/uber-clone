import React from 'react'
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import GooglePlacesInput from '../components/GooglePlaceInput';
import NavFavorite from '../components/NavFavorite';

import NavOptions from '../components/NavOptions';

const HomeScreen = () => {

   return (
      <SafeAreaView style={tw`bg-white h-full w-full py-4`}>
         <View style={tw`p-5 w-full`}>
            <View style={tw`mb-4 mt-4 overflow-hidden`}>
               <GooglePlacesInput
                  placeholder="Where From?"
                  destination="From" />
            </View>
            <Image
               source={{
                  uri: "https://links.papareact.com/gzs"
               }}
               style={{
                  width: 70,
                  height: 70,
                  resizeMode: 'contain'
               }}
            />

            <NavOptions />
            <NavFavorite />
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({

})

export default HomeScreen;
