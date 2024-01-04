import { RouteObject, useRoutes} from 'react-router-dom'
import Main from 'src/pages/main/Main'
import {MAIN_ROUTE, FILMS_ROUTE, SIGNIN_ROUTE, FILM_DETAIL_ROUTE, SIGNUP_ROUTE, SERIALS_ROUTE, SERIAL_DETAIL_ROUTE, PROFILE_ROUTE} from './config'
import Signin from 'src/pages/signin/Signin'
import FilmDetail from 'src/pages/films/FilmDetail'
import Signup from 'src/pages/signup/Signup'
import Films from 'src/pages/films/Films'
import Serials from 'src/pages/serials/Serials'
import SerialDetail from 'src/pages/serials/SerialDetail'
import Test from 'src/Test'
import React from 'react'
import { AuthContext } from 'src/App'
import Profile from 'src/pages/profile/Profile'

const MainRoutes = () => {
  
  const {isAuth, setIsAuth} = React.useContext(AuthContext) 

  const basedPath: RouteObject[] = [
    {path: MAIN_ROUTE, element: <Main />},
    {path: SIGNIN_ROUTE, element: <Signin />},
    {path: SIGNUP_ROUTE, element: <Signup />},
    {path: FILM_DETAIL_ROUTE, element: <FilmDetail />},
    {path: SERIAL_DETAIL_ROUTE, element: <SerialDetail />},
    {path: FILMS_ROUTE, element: <Films />},
    {path: SERIALS_ROUTE, element: <Serials />},
    {path: '/module5', element: <Test />}
  ]
  const authPath: RouteObject[] = [
    {path:PROFILE_ROUTE, element: <Profile />}
  ]

  const resultPath:RouteObject[] = basedPath

  isAuth ? resultPath.push(...authPath) : ''
  return (

    // <Routes>
    //   <Route path={MAIN_ROUTE} element={<Main />}/>
      
    // </Routes>

    useRoutes(basedPath)
  )
}

export default MainRoutes