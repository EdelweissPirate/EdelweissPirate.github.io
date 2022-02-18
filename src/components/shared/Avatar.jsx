function Avatar({ character, avatars }) {

    return (
        <div className="p-2">
            <img className="scale-150 sm:scale-125" src={avatars[character.avatar]} alt="missing character" />
        </div>
    )
}

export default Avatar
