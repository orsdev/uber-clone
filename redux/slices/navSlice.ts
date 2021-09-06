import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NumberOrString = number | string;

export interface NavState {
  origin: null | NumberOrString | object;
  destination: null | NumberOrString | object;
  travelTimeInformation: null | NumberOrString | object;
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
    setOrigin: (state, action: PayloadAction<object | null>) => {
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