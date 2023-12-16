import './Button.css'

const Button = ({text, onClick}) => {
  const handleClick = (e) => {
    e.preventDefault()
    onClick()
  }
  return (
    <button onClick={handleClick} className="form-button slide__button">
      {text}
    </button>
  )
}

export default Button