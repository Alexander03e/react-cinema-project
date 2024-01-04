import React from 'react'
import './App.css'
import Header from 'src/components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer/Footer'
// import { StoreContext } from './state/store'
import { useEffect, useState, createContext, useContext } from 'react'
import { fetchFilms } from './state/slices/slices'
import { useDispatch } from 'react-redux'


type AuthContextType = {
  isAuth:boolean, 
  setIsAuth: (auth:boolean) => void
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false, 
  setIsAuth: () => {}
})

function App() {
  // const store = React.useContext(StoreContext)
  const [isAuth, setIsAuth] = React.useState<boolean>(false)
  // const dispatch = useDispatch(); 
  // useEffect(() => {
  //   dispatch(fetchFilms())
  
  
  // }, [dispatch])

  // console.log(store)
  return (
    // <StoreContext.Provider value={store}>
      <div className="app">
        <AuthContext.Provider value ={{isAuth, setIsAuth}}>
          <Header />
          <main>
            <MainRoutes />
          </main>
          <Footer />
        </AuthContext.Provider>
      </div>
    // </StoreContext.Provider>
  )
}

export default App
