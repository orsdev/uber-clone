import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { GOOGLE_API_KEY } from '@env';
import { setDestination, setOrigin } from '../redux/slices/navSlice';

type GooglePlaceInputProps = {
   placeholder: string
   destination: 'From' | 'To'
};

const GooglePlacesInput = ({ placeholder,
   destination
}: GooglePlaceInputProps) => {
   const dispatch = useDispatch();
   const navigation: any = useNavigation();

   return (
      <GooglePlacesAutocomplete
         placeholder={placeholder}
         debounce={400}
         nearbyPlacesAPI="GooglePlacesSearch"
         onPress={(data, details = null) => {
            let geometry;
            let location;

            if (details) {
               geometry = details.geometry;
               location = geometry.location;

               if (destination === 'From') {
                  dispatch(setOrigin({
                     location,
                     description: data.description
                  }));

                  dispatch(setDestination(null));
               }

               if (destination === 'To') {
                  dispatch(setDestination({
                     location,
                     description: data.description
                  }));

                  navigation.navigate('RideOptionCard');
               }

            }
         }}
         query={{
            key: GOOGLE_API_KEY,
            language: 'en',
         }}
         minLength={2}
         fetchDetails={true}
         enablePoweredByContainer={false}
         styles={{
            container: {
               flex: 0,
            },
            textInput: {
               height: 45,
               color: '#5d5d5d',
               fontSize: 18,
               width: '100%',
               borderColor: '#ccc',
               borderWidth: 3
            },
         }}
      />
   );
};

export default GooglePlacesInput;