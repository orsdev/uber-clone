import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';


const data = [
   {
      id: "Uber-X-123",
      title: "UberX",
      multiplier: 1,
      image: "https://links.papareact.com/3pn"
   },
   {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8"
   },
   {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf"
   }
]

const RideOptionCard = () => {
   const navigation: any = useNavigation();
   const [selected, setSelected] = React.useState<any>(null);

   return (
      <SafeAreaView style={tw`bg-white flex-grow`}>
         <View>
            <TouchableOpacity
               style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
               onPress={() => navigation.goBack()}>
               <Icon
                  name="chevron-left"
                  type="font-awesome"
                  size={16} />
            </TouchableOpacity>
         </View>
         <Text
            style={tw`text-center py-5 text-xl`}>Select a Ride
         </Text>
         <FlatList
            data={data}
            renderItem={({ item }: any) => (
               <TouchableOpacity
                  onPress={() => setSelected(item)}
                  style={tw.style('flex-row justify-between items-center px-10', item.id === selected?.id && "bg-gray-200")}
               >

                  <Image
                     source={{
                        uri: item.image
                     }}
                     style={{
                        width: 70,
                        height: 70,
                        resizeMode: 'contain'
                     }}
                  />
                  <View style={tw`-ml-6`}>
                     <Text
                        style={tw`text-xl font-semibold`}>
                        {item.title}</Text>
                     <Text>Travel time...</Text>
                  </View>
                  <Text
                     style={tw`text-xl`}>
                     &#x20A6; 99</Text>
               </TouchableOpacity>
            )}
         />
         <View>
            <TouchableOpacity
               disabled={!selected}
               style={tw.style('bg-black py-2 m-2',
                  !selected && "bg-gray-300")}>
               <Text
                  style={tw`text-center text-white text-xl`}
               >Choose {selected?.title}</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}

export default RideOptionCard;

