import React, { createContext, useState } from 'react'
import './App.css'
import Header from 'src/components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer/Footer'
import { StoreContext } from './state/store/store'

function App() {
  const store = React.useContext(StoreContext)
  const [isAuth, setIsAuth] = React.useState<false | true>(false)
  // const [store, setStore] = useState(StoreContext)
  console.log(store)
  return (
    <StoreContext.Provider value={store}>
      <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
      <MainRoutes isAuth={isAuth}/>
      <Footer />
    </StoreContext.Provider>
  )
}

export default App
