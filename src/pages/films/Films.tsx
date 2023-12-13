import './Films.css'
import axios from 'axios'
import React from 'react'
import Movie from 'src/components/MovieList/Movie/Movie'

const Films = () => {
  
  const [films,setFilms] = React.useState()
  const filmsURL = 'http://127.0.0.1:8000/api/v1/films/?limit=15'

  axios
    .get(filmsURL)
    .then((res)=>setFilms(res.data))
  return (
    <section className="films">
      <div className="container">
        <div className="films-wrapper">
          {/* {films?.map(film=> <Movie film={film}/>)} */}
        </div>
      </div>
    </section>
  )
}

export default Films