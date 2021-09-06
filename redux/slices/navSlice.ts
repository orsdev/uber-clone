import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type OriginProps = {
   location: {
      lat: number;
      lng: number;
   },
   description?: string
}

export interface NavState {
  origin: null |  OriginProps;
  destination: null | object;
  travelTimeInformation: null | object;
}

const initialState: NavState = {
   origin: null,
  destination: null,
  travelTimeInformation: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<OriginProps | null>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<object | null>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<object | null>) => {
      state.travelTimeInformation = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export default navSlice.reducer