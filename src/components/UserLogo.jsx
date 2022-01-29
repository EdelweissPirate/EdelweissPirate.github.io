function UserLogo({ userData, userLogo }) {
    return (
        <a href={`https://github.com/${userData.login}`} rel="noreferrer" target="_blank" className={logoStyles.base}>
            <img src={userLogo} alt='missing logo' className={logoStyles.img}/>
        </a>
    )
}

const logoStyles = {
    base: 'scale-75',
    img: 'rounded-full',
}

export default UserLogo
