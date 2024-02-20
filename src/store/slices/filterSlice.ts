import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index';
import { FilterState } from '../../models/filterState.dto';

// Define a type for the slice state


// Define the initial state using that type
const initialState: FilterState = {
  sorting: "rating",
  ratingFilter: "",
  minPrice: "",
  maxPrice: "",
  criteriaFilter: []
}

export const filterSlice = createSlice({
  name: 'filter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload
    },
    updateRatingFilter: (state, action: PayloadAction<string>) => {
      state.ratingFilter = action.payload
    },
    updateMinPrice: (state, action: PayloadAction<string>) => {
      state.minPrice = action.payload
    },
    updateMaxPrice: (state, action: PayloadAction<string>) => {
      state.maxPrice = action.payload
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateCriteria: (state, action: PayloadAction<string>) => {
      const index: number = state.criteriaFilter.findIndex((element) => element === action.payload)
      if(index === -1){
        state.criteriaFilter.push(action.payload);
      }else{
        state.criteriaFilter.splice(index, 1);
      }
    },
  },
})

export const { updateRatingFilter, updateMinPrice, updateMaxPrice, updateCriteria } = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;

