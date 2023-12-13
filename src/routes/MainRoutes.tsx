import {Routes, Route, RouteObject, useRoutes} from 'react-router-dom'
import Main from 'src/pages/main/Main'
import React from 'react'
import {MAIN_ROUTE, FILMS_ROUTE, SIGNIN_ROUTE, FILM_DETAIL_ROUTE, SIGNUP_ROUTE} from './config'
import Signin from 'src/pages/signin/Signin'
import FilmDetail from 'src/pages/films/FilmDetail'
import Signup from 'src/pages/signup/Signup'
import Films from 'src/pages/films/Films'

const MainRoutes = ({isAuth=false}) => {
  
  const basedPath: RouteObject[] = [
    {path: MAIN_ROUTE, element: <Main />},
    {path: SIGNIN_ROUTE, element: <Signin />},
    {path: SIGNUP_ROUTE, element: <Signup />},
    {path: FILM_DETAIL_ROUTE, element: <FilmDetail />},
    {path: FILMS_ROUTE, element: <Films />}
  ]
  const authPath: RouteObject[] = [
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