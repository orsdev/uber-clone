import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';

import { RootState } from '../redux/store';
import { OriginDestinationProps } from '../redux/slices/navSlice';
import { GOOGLE_API_KEY } from '@env';

const Map = () => {
   const origin: OriginDestinationProps | null = useSelector((state: RootState) => state.nav.origin);
   const destination: OriginDestinationProps | null = useSelector((state: RootState) => state.nav.destination);
   const mapRef = React.useRef<any>(null);

   React.useEffect(() => {
      if (origin && mapRef.current) {
         mapRef.current.fitToSuppliedMarkers(['origin'], {
            edgePadding: { top: 30, right: 30, bottom: 30, left: 30 }
         })
      }
   }, [origin]);

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
         ref={mapRef}
         style={{
            flex: 1
         }}
         mapType="mutedStandard"
         initialRegion={getInitialRegion()}
      >

         {/*
            * MapViewDirection throwing error
            * MapViewDirections Error:
            * Error on GMAPS route request: ZERO_RESULTS
         */}
         {/* {!destination && origin && (
            <MapViewDirections
               origin={{
                  latitude: origin.location.lat,
                  longitude: origin.location.lng,
               }}
               destination={{

                  latitude: destination.location.lat,
                  longitude: destination.location.lng,
                  latitude: 6.6044249,
                  longitude: 3.2730433,
               }}
               strokeWidth={3}
               strokeColor="black"
               apikey={GOOGLE_API_KEY}
            />
         )} */}

         {origin && (
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
