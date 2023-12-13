import './Button.css'

const Button = ({text}) => {

  return (
    <button className="form-button slide__button">
      {text}
    </button>
  )
}

export default Button