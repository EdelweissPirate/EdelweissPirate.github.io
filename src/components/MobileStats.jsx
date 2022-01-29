import { FaTimes } from "react-icons/fa"
import Button from "./shared/Button"
import StatBlock from "./StatBlock"

function MobileStats({ userData, updateStatsActive }) {
    return (
        <>
            <div className={mobileStatsStyles.base}>
                <StatBlock userData={userData} />
                <div className={mobileStatsStyles.button}>
                    <Button handleClick={()=> updateStatsActive()}>
                        <FaTimes/>
                    </Button>
                </div>
            </div>
        </>
    )
}

const mobileStatsStyles = {
    base: 'relative w-full pt-5 px-10 text-center',
    button: 'absolute flex max-h-1 justify-end inset-0 m-0 pt-5 right-8 text-2xl'
}

export default MobileStats
