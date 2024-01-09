import '../MovieList.css'
import { NavLink } from 'react-router-dom'

const Movie = ({film,serial}) => {
  
  let movie;
  film ? movie = film : movie = serial
  return (
    <div className="movie__wrapper">
      <div className="movie__img-container">
        <NavLink to={`/${film ? 'films' : 'serials'}/`+movie?.id}>
          <div className="hidden">
            <NavLink to={`/${film ? 'films' : 'serials'}/`+movie?.id}>Смотреть</NavLink>
            <NavLink to='test'>Смотреть позже</NavLink>
          </div>
        <img src={movie?.image} alt="" className="movie__img" /></NavLink>
      </div>
      <div className="movie__content-container">
        <p>{movie?.title}</p>
      </div>
    </div>
  )
}

export default Movie