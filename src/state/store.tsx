import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { storeSlice } from './slices/slices'

export const store = configureStore({reducer:() => {}})

export type StoreType = {
  films?: Array<FilmType>,
  serials?:Array<FilmType>,
  theme?:string
}
export type FilmType = {
  id: number,
  name: string,
  desc?: string,
  shortDesc?: string,
  genre?: string,
  image?: string
}
 

const initState: StoreType= {
  films: [
    {id: 1, name: 'Film 1'},
    {id: 2, name: 'Film 2'}
  ],
  theme: 'white'
}


// const reducer = (state: StoreType, action: ReducerAction): typeof initState => {
//   switch(action.type){
//     case REDUCER_ACTION_TYPE.CHANGE_THEME:
//       return {...state, state.theme: 'black'}

//     default: 
//       throw new Error()
//   }
// }

// export const StoreContext = React.createContext<[StoreType, React.Dispatch<ReducerAction>] | null>(null)
export const StoreContext = React.createContext<StoreType | null>(initState)

//export {tState, setTState}


