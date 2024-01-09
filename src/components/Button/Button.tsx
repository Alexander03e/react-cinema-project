import './Button.css'

const Button = ({text, onClick, type}) => {
  const handleClick = (e) => {
    e.preventDefault()
    onClick()
  }
  return (
    <button onClick={handleClick} className="form-button slide__button" type={type}>
      {text}
    </button>
  )
}

export default Button