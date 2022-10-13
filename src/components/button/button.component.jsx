import "./button.styles.scss"


const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: "inverted"
}

const Button = ({ children, buttonType,  ...otherProps}) => {
    return (
        <buton className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            {...otherProps}
        >
        {children}
        </buton>
    )
}

export default Button