import CharacterCard from "./CharacterCard"

function PartyCard({ party, avatars }) {
    const generateCharacterCard = (i) => {
        return (<CharacterCard key={i} character={party[i][1]} avatars={avatars} />)
    }

    return (
        <>
            {party.map((item, i) => {
                return generateCharacterCard(i)
            })}
        </>
    )
}

export default PartyCard
