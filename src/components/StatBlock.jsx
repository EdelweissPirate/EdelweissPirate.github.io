function StatBlock({ userData }) {

    const fixDate = input => {
        if(!input) return
        let date = input.split('T')[0]
        date = date.split('-')

        const [year, month, day] = [...date]

        return date = [day, month, year].join('-')
    }

    const displayVal = (val, colour) => {
        return (
            <span className={colour} >{val}</span>
        )
    }

    return (
        <>
            <ul className={statStyles.base}>
                <li className='flex lg:block mt-2 md:m-0'>Username: {displayVal(userData.login, 'text-orange-600')}</li>
                <li className='flex lg:block'>Active since: <br/>{displayVal(fixDate(userData.created_at))}</li> 
                <li className='flex lg:block'>Public repos: {displayVal(userData.public_repos)}</li>
                <li className='flex lg:block'>Followers: {displayVal(userData.followers)}</li>
                <li className='flex lg:block'>Following: {displayVal(userData.following)}</li>
            </ul>
        </>
    )
}

const statStyles = {
    base: 'font-mono flex-col justify-center responsiveStat md:text-md  xl:text-3xl'
}

export default StatBlock
