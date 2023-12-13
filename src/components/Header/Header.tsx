import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom' 
import { UserOutlined } from '@ant-design/icons'
import { Switch } from 'antd'

const Header = ({isAuth, setIsAuth}) => {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('light')
  const [login, setLogin] = React.useState<true | false>(false)
  const [checked, setChecked] = React.useState<true | false>(false)
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
            <NavLink to='/serials' className="nav__item">Коллекции</NavLink>
            <NavLink to='/serials' className="nav__item">Жанр</NavLink>
            <input className='nav__search'
              placeholder='Введите запрос'
            />
            {login ? <NavLink to='/profile'><UserOutlined style={{fontSize: '35px'}}/></NavLink> : <NavLink to='/signin'>Войти</NavLink>}
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