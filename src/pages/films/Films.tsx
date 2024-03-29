import './Films.css'
import axios from 'axios'
import React from 'react'
import Button from 'src/components/Button/Button'
import Movie from 'src/components/MovieList/Movie/Movie'
import styled from 'styled-components'
import { Table } from 'antd';
import { columns, columns_user,Film, User } from './columns'

interface StyledProps {
  Color?: string
}



const Films = () => {

  const [films,setFilms] = React.useState<Film[]>([])
  const [dataSource, setDataSource] = React.useState<User[]>([])
  const [curPage, setCurPage] = React.useState<number>(0)
  const [page, setPage] = React.useState<number>(1)
  const [filters, setFilters] = React.useState(false)
  const [initFilms, setInitFilms] = React.useState('')
  const LIMIT_LIST_USERS = 8;
  const LIMIT_LIST_FILMS = 6;
  const skip = (page - 1) * LIMIT_LIST_USERS;
  
  const getUsers = async (skip:number, limit:number) => {
    await axios
      .get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
      .then(res => setDataSource(res.data.users))
  }

  const getFilms = async () => {
    await axios
    .get(filmsURL)
    .then((res)=>{setFilms([...films, ...res.data.results]), setInitFilms([...films, ...res.data.results])})
  } 

  

  

  let filmsURL = `http://127.0.0.1:8000/api/v1/films/?offset=${curPage*LIMIT_LIST_FILMS}&limit=${LIMIT_LIST_FILMS}`
  React.useEffect(() => {
    getFilms()
    getUsers(skip, LIMIT_LIST_USERS)
  }, [page])

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
        <Table<Film> columns={columns_user} dataSource={dataSource}/>
        <button onClick={() => setPage(page - 1)} disabled={!skip}>Назад</button>
        <button onClick={() => setPage(page + 1)}>Вперед</button>
        <p>Текущая страница: {page}</p>

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