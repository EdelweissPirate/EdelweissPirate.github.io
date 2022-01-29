import { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(undefined)
    const [userData, setUserData] = useState(undefined);
    const [error, setError] = useState(null)

    
    useEffect(() => {
        if(currentUser !== undefined){
            fetchUser()
        }
    }, [currentUser])

    const fetchUser = async () => {
        setLoading(true)

        const data = await fetch(`https://api.github.com/users/${currentUser}`)
            .then((response) => response.json())
            .then(setUserData)
            .then(() => {setLoading(false)})
            .catch(setError)

        return data
    }

    const updateUser = async (username) => {
        if(username){
            return await updateCurrentUser(username)
        } else {
            return undefined
        }
    }

    const updateCurrentUser = async (username) => {
        return setCurrentUser(username)
    }

    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>

    return <UserContext.Provider value={{ loading, updateUser, currentUser, userData }}>
                {children}
            </UserContext.Provider>
}

export default UserContext

// REF
//         name: userData.login,
//         avatar: userData.avatar_url,
//         bio: userData.bio,
//         activeSince: userData.created_at,
//         stats: {
//             publicRepos: userData.public_repos,
//             followers: userData.followers,
//             following: userData.following,
//         }