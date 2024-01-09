import { NavLink } from "react-router-dom"
import './Footer.css'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li><NavLink to='/films'>О нас</NavLink></li>
          <li><NavLink to='/films'>Коллекции</NavLink></li>
          <li><NavLink to='/films'>Реклама</NavLink></li>
          <li><NavLink to='/films'>Поддержка</NavLink></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer