import './button.css'

const Button = (props) => {

    const alertMessage = () => {
        alert(`A label desse botão é ${props.label}`)
    } 

    return <button className="btn" onClick={alertMessage}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button