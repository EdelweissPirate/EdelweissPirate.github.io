import UserLogo from "./UserLogo"

function MobileAvatar({ userData, userLogo, loading }) {
    return (
        <div className='container scale-50 flex lg:hidden items-center object-contain h-20 w-40 m-auto'>
            {!loading && userLogo ? <UserLogo userData={userData} userLogo={userLogo} /> : null }
        </div>
    )
}

export default MobileAvatar
