import { useEffect, useState } from "react"
import MenuButton from "./MenuButton"
import Card from "./shared/Card"

function Gil({ handleMenuShow }) {
    const [time, setTime] = useState('00:00:00')

    useEffect(() => {
        const interval = setInterval(function() {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const generateEntry = (key, val) => {
        return (
            <div className='py-1 col-span-5 sm:col-span-8 col-end-9 sm:col-end-10 flex justify-between' >
                    <p>{key}</p>
                    <h1>{val}</h1>
                </div>
        )
    }

    return (
        <Card styling={'sm:absolute sm:bottom-4 sm:-right-12 sm:w-2/6 sm:p-2 md:p-3 text-2xl'}>
            <div className='relative grid grid-cols-8 grid-rows-2 px-8 sm:px-4'>
                <MenuButton handleMenuShow={handleMenuShow} />
                {generateEntry('Time', time)}
                {generateEntry('Gil', 2244)}
            </div>
        </Card>
    )
}

export default Gil
