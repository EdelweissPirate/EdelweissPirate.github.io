import Title from './Title'
import Avatar from './Avatar'

function Header( { userData, userLogo, loading } ) {
    return (
        <header className={headerStyles.base}>
            <div className={headerStyles.container}>
                <Title userData={userData} />
                <Avatar userData={userData} userLogo={userLogo} loading={loading} />
            </div>
        </header>
    )
}

const headerStyles = {
    base: 'min-w-full m-0 top-0 overflow-hidden flex flex-row justify-center items-center text-center bg-teal-600 bg-opacity-10 bg-blend-color-burn shadow-lg border-b-4',
    container: 'flex row items-center py-8'
}

export default Header
