import Card from "./shared/Card"
import options from '../data/options.json'
import { FaTimes } from 'react-icons/fa'

function MenuMain({ handleMenuShow }) {

    const populateMenu = () => {
        return options.main.map((item, i) => {
            return (
                <button key={i} className='menuItem p-3 justify-center sm:p-0.5'>
                    <li>
                        {item}
                    </li>
                </button>
            )
        })
    }

    return (
        <Card styling={'mainMenu absolute w-screen h-screen -top-10 -right-5 m-0 sm:-top-8 sm:-right-12 sm:w-1/6 sm:h-auto md:p-2 text-3xl z-50'}>
            <button className="absolute sm:hidden right-6 top-6 p-4" onPointerDown={handleMenuShow}>
                <FaTimes />
            </button>
            <ul className='menu h-full flex justify-center items-center flex-col sm:items-start sm:justify-start'>
                {populateMenu()}
            </ul>
        </Card>
    )
}

export default MenuMain
