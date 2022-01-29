import PropTypes from 'prop-types'

function Button({children, type, isDisabled, styleClass, handleClick}) {
    return (
        <button 
        type={type} 
        disabled={isDisabled}
        className={styleClass}
        onClick={handleClick}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propsType = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button
