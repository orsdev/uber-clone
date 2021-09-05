import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NumberOrString = number | string;

export interface NavState {
  origin: null | NumberOrString;
  destination: null | NumberOrString;
  travelTimeInformation: null | NumberOrString;
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
    setOrigin: (state, action: PayloadAction<NumberOrString>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<NumberOrString>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<NumberOrString>) => {
      state.travelTimeInformation = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export default navSlice.reducer