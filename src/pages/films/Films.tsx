import './Films.css'
import axios from 'axios'
import React from 'react'
import Button from 'src/components/Button/Button'
import Movie from 'src/components/MovieList/Movie/Movie'
import styled from 'styled-components'
import { Table } from 'antd';
import type {ColumnsType} from 'antd/es/table'

interface Film {
  title: string,
  subtitle:string, 
  year:number,
  genre:string[],
  rating_stars:number,
  id:number,
  image:string,
  is_favorite: boolean 
}

interface StyledProps {
  Color?: string
}

const Films = () => {

  const [films,setFilms] = React.useState<Film[]>([])
  const [curPage, setCurPage] = React.useState<number>(0)
  const [filters, setFilters] = React.useState(false)
  const [initFilms, setInitFilms] = React.useState('')
  const getFilms = async () => {
    await axios
    .get(filmsURL)
    .then((res)=>{setFilms([...films, ...res.data.results]), setInitFilms([...films, ...res.data.results])})
  } 
  
  const columns : ColumnsType<Film> = [
    {
      key: 'title',
      title: 'Фильм',
      dataIndex: 'title',
    }, 
    {
      key:'subtitle',
      title: 'Описание',
      dataIndex: 'subtitle'
    }, 
    {
      key: 'rating',
      title: 'Рейтинг',
      dataIndex: 'rating_stars'
    },
    {
      key:'year',
      title: 'Год',
      dataIndex: 'year',
    },
    {
      key:'genre',
      title: 'Жанр',
      dataIndex: 'genre'
    }
  ]

  let filmsURL = `http://127.0.0.1:8000/api/v1/films/?offset=${curPage*6}&limit=6`
  React.useEffect(() => {
    getFilms()
    
  }, [curPage])

  const handleClick = () => {
    setCurPage(1)
  }

  const Filter = styled.p<StyledProps>`
  color: ${({Color}) => Color ? Color: 'red'};
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
        <Table<Film> columns={columns} dataSource={films}/>
        <Button text='Загрузить еще' onClick={handleClick}/>

        <h1 style={{color:'var(--text-color)'}}>Фильмы</h1>
        <p>Сортировка:</p>
        
        <Filter Color="var(--text-color)" onClick={openFilters}>Жанр</Filter> {/* interface StyledProps */}

        {filters && <FilterWrapper><Filter onClick={changeGenreFilter} tabindex='0'>Боевик</Filter><Filter onClick={changeGenreFilter1} tabindex='0'>Фантастика</Filter></FilterWrapper>}
        <div className="films-wrapper">
          {films != ''?films.map(film=> <Movie key={film.id} film={film}/>):''}
        </div>
        <Button text='Загрузить еще' onClick={handleClick}/>
      </div>
    </section>
  )
}

export default Films