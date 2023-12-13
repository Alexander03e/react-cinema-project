import { StoreContext } from 'src/state/store/store'
import './Main.css'
import Slider from './Slider/Slider'
import React, { useEffect, useState } from 'react'
import MovieList from 'src/components/MovieList/MovieList'
import axios from 'axios'

const Main = () => {
  const filmsURL = 'http://127.0.0.1:8000/api/v1/films/'

  const [films, setFilms] = useState('')
  const getFilms = async () => {
    await axios
      .get(filmsURL)
      .then(res=>setFilms(res.data.results))
  }
  useEffect(() => {
    getFilms()
  }, [])

  const store = React.useContext(StoreContext)
  return (
    <main>
      <div className="container">
        <Slider films={films}/>
        <MovieList films={films} title={'Новинки'}/>
        <MovieList films={films} title={'Рекомендации'}/>
      </div>
    </main>
  )
}

export default Main