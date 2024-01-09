import './Serials.css'
import axios from 'axios'
import React from 'react'
import Button from 'src/components/Button/Button'
import Movie from 'src/components/MovieList/Movie/Movie'

const Serials = () => {
    
  const [films,setFilms] = React.useState<any>('')
  const [curPage, setCurPage] = React.useState<number>(0)
  
  
  const getFilms = async () => {
    await axios
    .get(filmsURL)
    .then((res)=>setFilms([...films, ...res.data.results]))
  } 
  
  let filmsURL = `http://127.0.0.1:8000/api/v1/serials/?offset=${curPage*6}&limit=6`
  React.useEffect(() => {
    getFilms()
  }, [curPage])

  const handleClick = () => {
    setCurPage(1)
  }
  return (
    <section className="films">
      <div className="container">
        <h1 style={{color:'var(--text-color)'}}>Сериалы</h1>
        <div className="films-wrapper">
          {films != ''?films.map(serial=> <Movie serial={serial}/>):''}
        </div>
        <Button text='Загрузить еще' onClick={handleClick}/>
      </div>
    </section>
  )
}

export default Serials