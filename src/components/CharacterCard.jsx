import Avatar from "./shared/Avatar"
import ProgressBar from "./shared/ProgressBar"

function CharacterCard({ character, avatars }) {
    return (
        <div className="grid grid-cols-4 px-5 md:px-5 py-5 md:py-8 my-5 md:my-0" >
            <div className="col-span-1 flex justify-center items-center align-middle" >
                <Avatar character={character} avatars={avatars}/>
            </div>
            <div className="col-span-3 pl-4 sm:pl-16 md:pl-0 sm:col-span-1 mx-3 my-1" >
                <ul>
                    <li><h1>{character.name}</h1></li>
                    <li><h2>LV</h2><h1>{character.level}</h1></li>
                    <li><h2>HP</h2><h1>{character.hp} / {character.max_hp}</h1></li>
                    <li><h2>MP</h2><h1>{character.mp} / {character.max_mp}</h1></li>
                </ul>
            </div>
            <div className="col-span-2 hidden mx-3 my-1 sm:block" >
                <ul className="pt-5">
                    <li><h1>next level</h1></li>
                    <ProgressBar />
                    <li><h1>Limit level <span>{character.level_limitBreak}</span></h1></li>
                    <ProgressBar />
                </ul>
                
            </div>
        </div>
    )
}

export default CharacterCard
