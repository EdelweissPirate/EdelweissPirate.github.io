import Spinner from './shared/Spinner'
import UserLogo from './UserLogo'
import { FaGithub } from 'react-icons/fa'

function Avatar({ userData, userLogo, loading }) {    
    return (
        <>
            {userData ? 
                <div className={avatarStyles.img}>
                    {loading || !userLogo ?
                        <Spinner/> 
                        : <UserLogo userData={userData} userLogo={userLogo} />
                    }
                </div> : 
                <div className={avatarStyles.fallback}>
                    <a href={`https://github.com`} rel="noreferrer" target="_blank">
                        <FaGithub />
                    </a>
                </div>
            }
        </>
    )
}

const avatarStyles = {
    img: 'container scale-50 hidden lg:flex items-center object-contain h-20 w-40 absolute left-auto right-0 lg:right-56 transition ease-in-out delay-50 hover:scale-75 duration-300',
    fallback: 'container text-4xl hidden md:flex items-center object-contain h-20 w-40 absolute left-auto right-0 lg:right-40',
}

export default Avatar
