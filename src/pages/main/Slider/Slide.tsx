import { NavLink } from 'react-router-dom'
import './Slider.css'

const Slide = ({film, index}) => {
  return (
    <div style={{left:`${index*100}%`}} className="slider__slide">
      <div className="slider__slide-img-container">
        <img src={film?.image} alt="No photo" className="slider__slide-img" />
      </div>
      <div className="slider__slide-content">
        <h1>{film?.title}</h1>
        
        {/* <p>{film?.subtitle}</p> */}
        <div className='content-wrapper'>
          <NavLink className='slide__button' to={'/films/'+film.id}>Смотреть</NavLink>
        </div>
      </div>
      </div>
  )
}

export default Slide