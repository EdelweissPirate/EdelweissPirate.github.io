export const swapClass = (selector, remove, add) => {
    if(document.querySelector(selector)){
        document.querySelector(selector).classList.remove(remove)
        document.querySelector(selector).classList.add(add)
    }
}

export const truncateText = (text, n) => {
    return text.length > n ? text.split('.')[0] + '...' : text 
}