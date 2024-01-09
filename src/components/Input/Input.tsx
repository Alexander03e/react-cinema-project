import './Input.css'

const Input = (props) => {

  return (
    <input className='form-input nav__search' placeholder={props.placeholder}/>
  )
}

export default Input