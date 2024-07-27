import './button.css'

const Button = (props) => {
    return(
        <>
            <div className='button-body'>
                <button>{props.text}</button>
            </div>
        </>
    )
}

export default Button