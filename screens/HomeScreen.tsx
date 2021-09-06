import React from 'react'
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import NavOptions from '../components/NavOptions';

const HomeScreen = () => {

   return (
      <SafeAreaView style={tw`bg-white h-full w-full`}>
         <View style={tw`p-5 w-full`}>
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
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({

})

export default HomeScreen;
