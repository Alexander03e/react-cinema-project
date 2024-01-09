import './Slider.css'
import Slide from './Slide'
import React, { useEffect } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const Slider = ({films}) => {

  const [count, setCount] = React.useState(0)

  const prevClick = () => {
    setCount(count=>count-1)
    count <= 0 ? setCount(films.length-1) : '' 
  }
  const nextClick = () => {
    setCount(count=>count+1)
    count >= films.length-1 ? setCount(0) : ''
  }
  
  console.log(films)

  return(
    
    <section className="slider">
      <div className="slider__wrapper">
        <div style={{left:`${count*-100}%`, transition: '0.3s'}} className="slider__items">
        {films!=''? films.map((film,index) => <Slide film={film} key={film.id} index={index}/>) : ''}
        </div>
      <div className='slider__filter' > 
        <div className="prev slider__btn" onClick={prevClick}><div className="slider__btn-bg" /><LeftOutlined style={{fontSize: '3em', color: 'white'}}/></div>
        <div className="next slider__btn" onClick={nextClick}><div className="slider__btn-bg" /><RightOutlined style={{fontSize: '3em', color: 'white'}}/></div>
      </div>
      </div>
      
      
    </section>
  )
}

export default Slider