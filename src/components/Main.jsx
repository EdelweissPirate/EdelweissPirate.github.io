import Card from './shared/Card'
import Input from './Input'
import MobileAvatar from './MobileAvatar'
import InfoCard from './InfoCard'
import Spinner from './shared/Spinner'
import MobileStats from './MobileStats'
import { useState, useEffect } from 'react'
import { swapClass } from '../utils'

function Main( { userData, userLogo, updateUser, loading }) {
    const [statsActive, setStatsActive] = useState(true)
    const [thisLoading, setThisLoading] = useState(false)

    useEffect(() => {
        setThisLoading(loading)
        if(loading)setStatsActive(false)
    }, [loading])

    const updateStatsActive = () => {
        toggleClasses()
        setTimeout(function() {
            setStatsActive(!statsActive)
            toggleClasses()
        }, 500)
    }

    const toggleClasses = () => {
        if(!statsActive){
            swapClass('.card', 'animate-fadeIn', 'animate-fadeOut')
            swapClass('.stats', 'animate-fadeOut', 'animate-fadeInUp')
        } else {
            swapClass('.card', 'animate-fadeOut', 'animate-fadeIn')
            swapClass('.stats', 'animate-fadeInUp', 'animate-fadeOut')
        }
    }

    return (
        <>
            <Input updateUser={updateUser} />
            {userData ? 
                thisLoading ? 
                    <Spinner/> 
                    :
                    <div className={mainStyles.base}>
                        <MobileAvatar userData={userData} userLogo={userLogo} loading={loading} />
                        <div className={mainStyles.container} >
                            {!statsActive ? 
                                <div className={mainStyles.card}>
                                    <Card>
                                        <InfoCard userData={userData} userLogo={userLogo} handleStatShow={()=> updateStatsActive()} />
                                    </Card>
                                </div>
                                :
                                <div className={mainStyles.mobileStats}>
                                    <MobileStats userData={userData} updateStatsActive={updateStatsActive} />
                                </div>
                            }
                        </div> 
                    </div>
                : null
            }
        </>
    )
}

const mainStyles = {
    base: 'h-full animate-fadeIn pt-6 md:pt-0',
    container: 'relative h-full w-full z-0',
    card: 'card animate-fadeIn',
    mobileStats: 'stats animate-fadeInUp absolute inset-0 m-0 lg:hidden justify-start p-0 items-center z-1 font-mono flex-col bg-teal-600 bg-opacity-10 h-full w-full rounded-t-xl overflow-hidden'

}

export default Main
