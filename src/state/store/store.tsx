import React from 'react'

type StoreType = {
  films?: Array<FilmType>,
  theme?:string
}
export type FilmType = {
  id: number,
  name: string,
  desc?: string,
  shortDesc?: string,
  genre?: string,
}

const initState: StoreType= {
  films: [
    {id: 1, name: 'Film 1'},
    {id: 2, name: 'Film 2'}
  ],
  theme: 'white'
}

const enum REDUCER_ACTION_TYPE {
  CHANGE_THEME,
  OPEN_MODAL,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?:any
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


