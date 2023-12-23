import Button from 'src/components/Button/Button'
import './Signin.css'
import Input from 'src/components/Input/Input'
import { NavLink } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

const Signin = () => {

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
          <Input {...register('name', {
            required:'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Нужно больше символов'
            }
          })
          }
          placeholder='Введите логин'/>
          <Input placeholder='Введите пароль'/>
          <div>{errors.name?.message}</div>
          <Button text='Войти'/>
          <p className='redirect-reg'>Нет аккаунта? <NavLink to='/signup'>Зарегистрируйтесь</NavLink></p>
        </form>
      </div>
    </section>
  )
}

export default Signin