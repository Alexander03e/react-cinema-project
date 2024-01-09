import Button from 'src/components/Button/Button'
import './Signin.css'
import Input from 'src/components/Input/Input'
import { NavLink, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import React from 'react'
import { AuthContext } from 'src/App'

const Signin = () => {
  
  const {isAuth, setIsAuth} = React.useContext(AuthContext)
  const [userData, setUserData] = React.useState({
    username: '',
    password:''
  })
  const navigate = useNavigate();
  const signinClick = async () => {
    await axios
            .post('http://127.0.0.1:8000/auth/token/login', {
              username: userData.username,
              password: userData.password,
            })
            .then(res=>
              {
                localStorage.setItem('token', res.data['auth_token']),
                setIsAuth(true)
                navigate('/profile')
              }
            )
  }

  interface IMyForm {
    name: string; 
    age: number;
  }

  const {
    register, 
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<IMyForm>({
    mode: 'onBlur',
  })

  const saveElement = (data: IMyForm) => {
    reset()
  }
  return (
    <section className="signin">
      <div className="container">
        <form className='form' onSubmit={handleSubmit(saveElement)}>
          <input {...register('name', {
            required:'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Нужно больше символов'
            }
          })
          }
          onChange={(e) => {setUserData({...userData, username: e.target.value})}}
          value={userData.username}
          className='form-input'
          placeholder='Введите логин'
          />
          <div><p>{errors.age?.message}</p></div>
          <input 
            placeholder='Введите пароль' 
            className='form-input'
            onChange={(e) => {setUserData({...userData, password: e.target.value})}}
            value={userData.password}
            type='password'
            />
          <div><p>{errors.name?.message}</p></div>
          <Button text='Войти' onClick={signinClick}/>
          <p className='redirect-reg'>Нет аккаунта? <NavLink to='/signup'>Зарегистрируйтесь</NavLink></p>
        </form>
      </div>
    </section>
  )
}

export default Signin