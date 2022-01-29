import { useState } from 'react'

function Input( { updateUser }) {
    const [text, setText] = useState('')
    const [message, setMessage] = useState(false)

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.length > 0){
            updateUser(text)
            setMessage(false)
        } else {
            setMessage(true)
            setTimeout(() => setMessage(false), 3000)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} className={formStyles.base}> 
            <input 
                onChange={handleTextChange} 
                value={text} 
                className={formStyles.input} 
                type="text" 
                id="uname" 
                name="uname" 
                placeholder="Insert GitHub username..." 
                spellCheck="false"
                autoComplete="off"
            />
            <input 
                type='button' 
                className='hidden'
            />
            
            {message? 
                <h3 className={formStyles.message} >Must enter a username</h3> 
                : null
            }
        </form>
        </>
    )
}

const formStyles = {
    base: 'grid grid-cols-1 gap-1 justify-center items-center mt-8 mb-4 lg:my-12',
    input: 'transition w-full ease-in-out delay-50 rounded-2xl border-4 border-slate-600 hover:border-orange-600 duration-1000 p-2 focus:outline-none focus:border-orange-600 text-slate-900 text-center',
    message: 'w-full absolute left-0 right-50 top-52 text-center text-3xl animate-fadeMessage z-0'
}

export default Input
