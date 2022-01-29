import { truncateText } from "../utils"

function Bio({ bioText }) {
    const bioStyles = {
        text: `responsiveQuote lg:text-xl py-20 px-20 lg:px-40 ${!bioText?.length > 0 && 'not-italic'} `
    }

    return (
        <figure>
            <blockquote className={bioStyles.text}>
                {bioText?.length > 0 ? 
                    <q>{truncateText(bioText, 100)}</q> 
                    : <p>No bio found.</p>
                }
            </blockquote>
        </figure>
    )
}

export default Bio
