import PropTypes from 'prop-types'

function Card({children, bg, shadow}) { //bg-teal-600, shadow-xl
    return (
        <div className={`grid lg:grid-cols-5 md:grid-cols-1 gap-1 justify-center items-center lg:m-5 md:m-1 lg:p-8 md:p-1 rounded-xl ${bg} ${shadow} overflow-hidden`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card
