import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Button, Icon } from 'react-native-elements';

const data = [
   {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Ayobo-Ipaja Road, Lagos, Nigeria"
   },
   {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "Oguntade Street, Lagos, Nigeria"
   }
]

const NavFavorite = () => {
   return (
      <FlatList
         keyExtractor={(item) => item.id}
         data={data}
         contentContainerStyle={{
            marginTop: 8
         }}
         ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200`, { height: .6 }]}></View>
         )}
         renderItem={({ item }: { item: any }) => (
            <TouchableOpacity
               style={tw`p-5 flex-row items-center`}
               onPress={() => {
                  console.log('clicked')
               }}
            >
               <Icon
                  style={tw` mr-3 rounded-full bg-gray-300 p-3`}
                  name={item.icon}
                  size={25}
                  color="white"
                  type="ionicon"
               />
               <View>
                  <Text style={tw`font-semibold text-lg`}>
                     {item.location}
                  </Text>
                  <Text style={tw`text-gray-500`}>{item.destination}</Text>
               </View>
            </TouchableOpacity>
         )}
      />
   )
}

export default NavFavorite

const styles = StyleSheet.create({})
