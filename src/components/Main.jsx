import { useEffect, useState } from 'react'
import Card from './shared/Card'
import Gil from './Gil'
import Location from './Location'
import MenuMain from './MenuMain'
import PartyCard from './PartyCard'

function Main({ characters, avatars, handleMenuShow }) {
    const [party, setParty] = useState(null)

    useEffect(() => {
        if(characters){
            setParty(Object.entries(characters))
        }
    }, [characters])

    return (
        <div className='flex justify-center flex-col h-full w-full'>
            {party?
                <>
                    <Card styling={'relative'}>
                        <Gil handleMenuShow={() => {handleMenuShow(true)}} />
                        <Location locale={'Golden Saucer'} />
                        <MenuMain handleMenuShow={() => {handleMenuShow(false)}} />
                        <PartyCard party={party} avatars={avatars} />
                    </Card>
                </>
            : null}
        </div>
    )
}

export default Main
