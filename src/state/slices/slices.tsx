import { createSlice } from "@reduxjs/toolkit";
import { FilmType } from "../store";
import { StoreType } from "../store";

const initialState: StoreType = {
  films: [],
}

export const storeSlice = createSlice({
  name: 'store',
  initialState: initialState,
  reducers:{
    
  }
})

export const 