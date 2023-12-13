import React from "react"
import axios from 'axios'
import './Films.css'
import { useParams } from "react-router-dom"

const FilmDetail = () => {
  
  interface FilmType {
    id?: number,
    title?:string,
    subtitle?:string
    image?: string,
    genre?: [],
  }

  const initFilmState: FilmType = {}
  const [filmState, setFilmState] = React.useState<FilmType>(initFilmState)
  const { filmid } = useParams<string>()

  const film_detailURL = `http://localhost:8000/api/v1/films/${filmid}/`

  axios
    .get(film_detailURL)  
    .then(res => setFilmState(res.data))

  return (
    <section className="film" style={{backgroundImage: `url(htp://localhost:8000${filmState?.image}) `}}>
      <div className="gradient-filter"></div>
        <div className="container">
          <div className="film-content">
            <h1 className="">{filmState?.title}</h1>
            <p className="">{filmState?.genre}</p>
            <p className="">{filmState?.subtitle}</p>
          </div>
          <img className='film-img' src={'http://localhost:8000'+filmState.image} alt="НЕТ ФОТО" />
        </div>
    </section>
  )
}

export default FilmDetail