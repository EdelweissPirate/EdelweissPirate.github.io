function Card({ children, styling }) {
    return (
        <div className={`card rounded-lg border-4 border-solid border-white p-1 my-2 sm:p-10 ${styling}`}>
            { children }
        </div>
    )
}

export default Card
