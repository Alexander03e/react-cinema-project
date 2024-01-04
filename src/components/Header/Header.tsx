import React from 'react'
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom' 
import { UserOutlined } from '@ant-design/icons'
import { Switch } from 'antd'
import { AuthContext } from 'src/App'

const Header = () => {

  const {isAuth, setIsAuth} = React.useContext(AuthContext)
  const navigate = useNavigate()
  const [theme, setTheme] = React.useState<'dark' | 'light'>('light')

  const changeTheme = (checked: boolean) => {
    checked ? setTheme('light') : setTheme('dark')
    document.documentElement.setAttribute('data-theme', theme)
  }
  return (
    <header>
      <div className="header-container">
        <nav className="header__nav nav">
          <div className="nav__menu">
            <NavLink to='/' className="nav__item">Главная</NavLink>
            <NavLink to='/films' className="nav__item">Фильмы</NavLink>
            <NavLink to='/serials' className="nav__item">Сериалы</NavLink>
            <NavLink to='/collections' className="nav__item">Коллекции</NavLink>
            <NavLink to='/genre' className="nav__item">Жанр</NavLink>
            <input className='nav__search'
              placeholder='Введите запрос'
              onClick={() => setIsAuth(!isAuth)}
            />
            {isAuth ? <NavLink to='/profile'><UserOutlined style={{fontSize: '32px'}}/><p onClick={() => {setIsAuth(false); localStorage.removeItem('token'); navigate('')}}>Выйти</p></NavLink> : <NavLink to='/signin'>Войти</NavLink>}
          </div>
        </nav>
      </div>
      <div className="nav-filter"></div>
      <div className="theme">
        <Switch defaultChecked onChange={changeTheme} style={{backgroundColor: theme == 'dark' ? 'var(--text-color)' : 'black', border:'1px solid white'}} />
      </div>
    </header>
  )
}

export default Header