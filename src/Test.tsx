import React from 'react'
import { NavLink } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
 
const Test = () => {
    const [tasks, setTasks] = React.useState<IMyForm[]>([])
    const [value, setValue] = React.useState('') 

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

      const saveElement: SubmitHandler<IMyForm> = data => {
        setTasks((prev) => [...prev, data])
        reset()
      }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(saveElement)}>
      <input 
          {...register('name', {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                    value: 5,
                    message: "Нужно больше символов"
                  }
                }
                
              
        )}
        placeholder='name'
      />
      <div>{errors.name?.message}</div>
      <input 
          {...register('age', {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                      value: 1,
                      message: "Нужно больше символов "
                  }
              }
          )}
          placeholder='age'
          />
      <div>{errors.age?.message}</div>
      <button type="submit">Сохранить</button>
      </form>

      {tasks.map(task => {
        return (
          <p>{task.name} - {task.age}</p>
        )
      })}
    </div>
  )
}

export default Test;