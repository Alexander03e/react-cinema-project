import '../MovieList.css'
import { NavLink } from 'react-router-dom'

const Movie = ({film}) => {

  return (
    <div className="movie__wrapper">
      <div className="movie__img-container">
        <NavLink to={'/films/'+film.id}>
          <div className="hidden">
            <NavLink to={'/films/'+film.id}>Смотреть</NavLink>
            <NavLink to='test'>Смотреть позже</NavLink>
          </div>
        <img src={film.image} alt="" className="movie__img" /></NavLink>
      </div>
      <div className="movie__content-container">
        <p>{film.title}</p>
      </div>
    </div>
  )
}

export default Movie