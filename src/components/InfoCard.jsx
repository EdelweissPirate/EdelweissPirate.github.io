import Bio from './Bio'
import RepoBoxes from './RepoBoxes'
import Button from './shared/Button'
import StatBlock from './StatBlock'

function InfoCard({ userData, userLogo, handleStatShow }) {
    return (
        <>
            <div className={infoCardStyles.bio}>
                <Bio bioText={userData.bio} />
                <RepoBoxes count={userData.public_repos} logoTexture={userLogo} />
            </div>
            {userData?.login ? 
                <div className={infoCardStyles.stats}>
                    <div className='hidden lg:flex'>
                        <StatBlock userData={userData} />
                    </div>
                    <Button styleClass={infoCardStyles.button} handleClick={handleStatShow}>
                        STATS
                    </Button>
                </div>
                :
                null
            }
        </>
    )
}

const infoCardStyles = {
    bio: 'lg:col-span-3 md:col-span-1 text-center italic px-5 sm:pt-0 h-full relative z-0 flex justify-center items-center h-64 xs:h-82 md:h-96',
    stats: 'lg:col-span-2 md:col-span-1 text-center lg:text-left p-5 lg:bg-teal-600 lg:bg-opacity-10 lg:shadow-lg lg:shadow-gray rounded-xl p-5',
    button: 'px-10 py-3 bg-teal-600 bg-opacity-30 rounded-xl lg:hidden'
}

export default InfoCard
