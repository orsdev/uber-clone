import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

type NavProps = {
   id: string;
   title: string;
   image: string;
   screen: string;
}

const data = [
   {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "Map"
   },
   {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "Eat"
   }
];

const NavOptions = ({ navigation }: any) => {
   return (
      <FlatList
         keyExtractor={(item) => item.id}
         data={data}
         horizontal
         renderItem={({ item }: { item: NavProps }) => (
            <TouchableOpacity
               style={
                  [tw`p-2 pb-8 pt-4 pl-3 bg-gray-200 m-2 w-40`]
               }
               onPress={() => {
                  if (item.screen === 'Map') {
                     navigation.navigate(item.screen)
                  }
               }}
            >
               <View>
                  <Image
                     source={{
                        uri: item.image
                     }}
                     style={{
                        width: 120,
                        height: 120,
                        resizeMode: 'contain'
                     }}
                  />
                  <View style={tw`mt-2 flex-row items-center`}>
                     <Text style={tw`text-lg font-semibold mr-1`}>{item.title}</Text>
                     <Icon
                        style={tw`bg-black rounded-full w-10 p-2 ml-1`}
                        name='arrowright'
                        type='antdesign'
                        color='#fff'
                     />
                  </View>
               </View>
            </TouchableOpacity>
         )}
      />
   )
}

export default NavOptions;

