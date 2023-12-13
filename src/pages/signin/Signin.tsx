import Button from 'src/components/Button/Button'
import './Signin.css'
import Input from 'src/components/Input/Input'
import { NavLink } from 'react-router-dom'
const Signin = () => {

  return (
    <section className="signin">
      <div className="container">
        <form className='form'>
          <Input placeholder='Введите логин'/>
          <Input placeholder='Введите пароль'/>
          <Button text='Войти'/>
          <p className='redirect-reg'>Нет аккаунта? <NavLink to='/signup'>Зарегистрируйтесь</NavLink></p>
        </form>
      </div>
    </section>
  )
}

export default Signin