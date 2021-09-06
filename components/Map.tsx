import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux'

import { RootState } from '../redux/store';
import { OriginProps } from '../redux/slices/navSlice';

const Map = () => {
   const origin: OriginProps | null = useSelector((state: RootState) => state.nav.origin);

   const getInitialRegion = () => {

      if (!origin) {
         return {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
         }
      } else {
         return {
            latitude: origin?.location?.lat,
            longitude: origin?.location?.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
         }
      }
   }

   return (
      <MapView
         style={{
            flex: 1
         }}
         mapType="mutedStandard"
         initialRegion={getInitialRegion()}
      >
         {origin?.location && (
            <Marker
               key={origin.description}
               coordinate={{
                  latitude: origin.location.lat,
                  longitude: origin.location.lng,
               }}
               title="Origin"
               identifier="origin"
               description={origin.description}
            />
         )}
      </MapView>
   )
}

export default Map;
