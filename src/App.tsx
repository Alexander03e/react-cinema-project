import React from 'react'
import './App.css'
import Header from 'src/components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer/Footer'
import { StoreContext } from './state/store'

function App() {
  const store = React.useContext(StoreContext)
  const [isAuth, setIsAuth] = React.useState<false | true>(false)

  console.log(store)
  return (
    <StoreContext.Provider value={store}>
      <div className="app">
        <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
        <main>
          <MainRoutes isAuth={isAuth}/>
        </main>
        <Footer />
      </div>
    </StoreContext.Provider>
  )
}

export default App
