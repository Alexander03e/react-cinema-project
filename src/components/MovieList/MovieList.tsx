import Movie from "./Movie/Movie"
import './MovieList.css'

const MovieList = ({title, films}) => {
  
  return (
    <section className="movie__list">
      <h1 className="movie__list-title">{title}</h1>
      <div className="movie__list-wrapper">
        {films!=''? films.slice(1,6).map(film => <Movie film={film} key={film.id}/>) : ''}
      </div>
    </section>
  )
}

export default MovieList