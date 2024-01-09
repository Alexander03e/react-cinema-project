// import styled from "styled-components"


// const Filter = ({children, onClick, films, setFilms}) => {

  

//   const Filter = styled.p`
//   color: var(--text-color);
//   text-decoration:underline;
//   cursor:pointer;
//   &:focus{
//     color:var(--text-color);
//   }
//   `

//   const changeGenreFilter = () => {
//     const filteredFilms = films.filter((film) => {
//       return (
//         film.genre.includes('Боевик')
//         )
//       })
//       setFilms(filteredFilms)
//   }



//   const handleClick = () => {
//     const filteredFilms = films.filter((film) => {
//       return (
//         film.genre.includes('Боевик')
//         )
//       })
//       setFilms(filteredFilms)
//     onClick()
//   }

//   return (
//     <Filter onClick={handleClick}>
//     {children}
//     </Filter>
//   )
// }

// export default Filter