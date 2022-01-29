import Header from './components/Header'
import Main from './components/Main'
import RepoLink from './components/RepoLink'
import UserContext from './context/UserContext'
import { Suspense, useContext, useEffect, useState } from 'react'

function App(){
    const [userLogo, setUserLogo] = useState(null)
    const { loading, userData, updateUser } = useContext(UserContext)

    useEffect(() => {
        if(userData)setUserLogo(userData.avatar_url)
    }, [userData])

    return (
        <div className={appStyles.base}>
            <Header userData={userData} userLogo={userLogo} loading={loading} />
            <Suspense fallback={null}>
                <RepoLink />
            </Suspense>
            <div className={appStyles.container}>
                <Main userData={userData} userLogo={userLogo} updateUser={updateUser} loading={loading} />
            </div>
        </div>
    )
}

const appStyles = {
    base: 'h-screen overflow-hidden',
    container: 'container h-full md:flex md:flex-col w-9/12 m-auto md:justify-start mb-10 lg:mb-0'
}

export default App