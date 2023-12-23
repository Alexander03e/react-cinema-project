import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { FilmType } from "../store";
import { StoreType } from "../store";
import axios from 'axios'
const initialState: StoreType = {
  films: [],
}

export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
  async () => {
    try {
      const { data } = await axios
        .get('http://127.0.0.1:8000/api/v1/films/')
      console.log(data)
      return data
    } catch (error) {
      return error
    }
  }
)

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
  },
  extraReducers:() => {
    [fetchFilms.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchFilms.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.films = action.payload;
      
    },
    [fetchFilms.rejected]: (state, action) => {},
  }
})

