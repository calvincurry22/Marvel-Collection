

let characters = []
let savedComics = []


const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const comicStateChangedEvent = new CustomEvent("comicStateChanged")

    eventHub.dispatchEvent(comicStateChangedEvent)
}



export const getCharacters = () => {
    return fetch("https://gateway.marvel.com:443/v1/public/characters?modifiedSince=2015-03-19T14%3A47%3A16-0400&limit=100&offset=1&apikey=6d001b15224bd9411b67705ef5d04bb5")
    .then(response => response.json())
    .then(
        parsedCharacters => {
            characters = parsedCharacters
        }
    )
}


export const useCharacters = () => {
    
    return characters
    
}


export const getSavedComics = () => {
    return fetch("http://localhost:8090/comics")
    .then(res => res.json())
    .then(parsedSavedComics => {
        savedComics = parsedSavedComics
    })
}

export const useSavedComics = () => {
    return savedComics.slice()
}


export const saveComic = comic => {
    return fetch('http://localhost:8090/comics', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comic)
    })
    .then(getSavedComics)
    .then(dispatchStateChangeEvent)
}