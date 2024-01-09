import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import { NavLink } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form";
import axios from 'axios';
import React from 'react';
import styled from 'styled-components'
import './Signup.css'

const Signup = () => {
  
  interface IMyForm {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password?: any;
  }


  const [regUser, setRegUser] = React.useState<IMyForm>({
    first_name:'',
    last_name: '',
    email: '',
    username: '',
  })

  const handleClick = async () => {
    console.log(regUser)
    alert(`Пользователь зарегистрирован:\n${JSON.stringify(regUser, null, 2)}`)
    await axios
      .post('http://127.0.0.1:8000/api/v1/users/', {
        first_name: regUser.first_name,
        last_name: regUser.last_name,
        username: regUser.username,
        email: regUser.email,
      })
  }
  
  const {
    register, 
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<IMyForm>({
    mode: 'onBlur',
  })

  const saveElement: SubmitHandler<IMyForm> = data => {
    // setRegUser((prev) => [...prev, data])
    // console.log(regUser)
    reset()
  }

  const CustomError = styled.p`
    padding:-1em;
    margin:-1em;
  `

  return (
    <section className="signin">
      <div className="container">
        <form className='form' onSubmit={handleSubmit(saveElement)}>
          <input 
            placeholder='Введите логин' 
            className='form-input'
            value={regUser.username}
            {...register('username', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Нужно больше символов'
              },
              maxLength: {
                value: 20,
                message: 'Максимум 20 символов'
              }
            })}
            onChange={(e) => {setRegUser({...regUser, username: e.target.value})}} 
          />
          <CustomError>{errors.username?.message}</CustomError>
          <input 
            className='form-input' 
            placeholder='Введите имя' 
            value={regUser.first_name}
            {...register('first_name', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Нужно больше символов'
              },
              
            })}
            onChange={(e) => {setRegUser({...regUser, first_name: e.target.value})}} 
          />
          <CustomError>{errors.first_name?.message}</CustomError>
          <input 
            className='form-input' 
            placeholder='Введите фамилию' 
            value={regUser.last_name}
            {...register('last_name', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Нужно больше символов'
              }
            })}
            onChange={(e) => {setRegUser({...regUser, last_name: e.target.value})}} 
            />
          <CustomError>{errors.last_name?.message}</CustomError>
          <input 
            className='form-input' 
            placeholder='Введите пароль' 
            {...register('password', {
              required: 'Поле обязательно для заполнения',
            })}
          />

          <input 
            className='form-input' 
            placeholder='Введите email'
            {...register('email', {
              required: 'Поле обязательно для заполнения',
            })} 
            onChange={(e) => {setRegUser({...regUser, email: e.target.value})}} 
            value={regUser.email}
          />
          <CustomError>{errors.email?.message}</CustomError>
          <Button type='submit' onClick={handleClick} text='Зарегистрироваться'/>
        </form>
      </div>
    </section>
  )
}

export default Signup