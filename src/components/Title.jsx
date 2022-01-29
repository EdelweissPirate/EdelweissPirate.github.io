import { useState, useEffect } from "react"

function Title({ userData }) {
    const [title, setTitle] = useState('GitHub Getter')

    useEffect(() => {
        if(userData){
            const dataKey = Object.keys(userData)[0] 
            
            const newTitle = userData[dataKey]
            
            return setTitle(newTitle.replace('.', ''))
        }
    }, [userData])

    return (
        <h1 className={titleStyles.base}>
            [{title}]
        </h1>
    )
}

const titleStyles = {
    base: 'title md:text-4xl font-bold'
}

export default Title
