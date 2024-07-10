import './button.css'

const Button = (props) => {

    return <button className="btn" onClick={() => alert(`A label desse botão é ${props.label}`)}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button