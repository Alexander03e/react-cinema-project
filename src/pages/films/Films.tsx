import './Films.css'
import axios from 'axios'
import React from 'react'
import Button from 'src/components/Button/Button'
import Movie from 'src/components/MovieList/Movie/Movie'
import styled from 'styled-components'

const Films = () => {
    
  const [films,setFilms] = React.useState<any>('')
  const [curPage, setCurPage] = React.useState<number>(0)
  const [filters, setFilters] = React.useState(false)
  const [initFilms, setInitFilms] = React.useState('')
  const getFilms = async () => {
    await axios
    .get(filmsURL)
    .then((res)=>{setFilms([...films, ...res.data.results]), setInitFilms([...films, ...res.data.results])})
  } 
  
  let filmsURL = `http://127.0.0.1:8000/api/v1/films/?offset=${curPage*6}&limit=6`
  React.useEffect(() => {
    getFilms()
    
  }, [curPage])

  const handleClick = () => {
    setCurPage(1)
  }

  const Filter = styled.p`
  color: var(--text-color);
  text-decoration:underline;
  cursor:pointer;
  &:focus{
    color:var(--text-color);
  }
  `
  
  const FilterWrapper = styled.div`
  display:flex;
  gap:1em;
  margin-bottom:2em;
  p{
    color:white;
  }
  `
  const openFilters = () => {
    setFilters(!filters)
    setFilms(initFilms)
  }


  const changeGenreFilter = (e) => {
    console.log(e)
    e.preventDefault()
    const filteredFilms = initFilms.filter((film) => {
      return (
        film.genre.includes('Боевик')
        )
      })
      setFilms(filteredFilms)
  }

  const changeGenreFilter1 = (e) => {
    console.log(e)
    e.preventDefault()
    const filteredFilms = initFilms.filter((film) => {
      return (
        film.genre.includes('Фантастика')
        )
      })
      setFilms(filteredFilms)
  }
  
  return (
    <section className="films">
      <div className="container">
        <h1 style={{color:'var(--text-color)'}}>Фильмы</h1>
        <p>Сортировка:</p>
        <Filter onClick={openFilters}>Жанр</Filter>
        {filters && <FilterWrapper><Filter onClick={changeGenreFilter} tabindex='0'>Боевик</Filter><Filter onClick={changeGenreFilter1} tabindex='0'>Фантастика</Filter></FilterWrapper>}
        <div className="films-wrapper">
          {films != ''?films.map(film=> <Movie film={film}/>):''}
        </div>
        <Button text='Загрузить еще' onClick={handleClick}/>
      </div>
    </section>
  )
}

export default Films