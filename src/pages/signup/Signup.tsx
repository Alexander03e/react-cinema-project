import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import { NavLink } from 'react-router-dom'
const Signup = () => {

  return (
    <section className="signin">
      <div className="container">
        <form className='form'>
          <Input placeholder='Введите логин'/>
          <Input placeholder='Введите пароль'/>
          <Input placeholder='Введите email'/>
          <Input placeholder='Введите город'/>
          <Button text='Зарегистрироваться'/>
        </form>
      </div>
    </section>
  )
}

export default Signup