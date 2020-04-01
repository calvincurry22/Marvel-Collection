

let characters = []
let comics = []
let singleComic = []
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





export const getComics = (charID) => {
    return fetch(`https://gateway.marvel.com:443/v1/public/characters/${charID}/comics?limit=20&apikey=6d001b15224bd9411b67705ef5d04bb5`)
        .then(response => response.json())
        .then(parsedComics => {
            comics = parsedComics
        })
}

export const useComics = () => {
    return comics
}



export const getSingleComic = (singleComicId) => {
    return fetch(`https://gateway.marvel.com:443/v1/public/comics/${singleComicId}?apikey=6d001b15224bd9411b67705ef5d04bb5`)
        .then(res => res.json())
        .then(parsedComic => {
            singleComic = parsedComic
        })
}


export const useSingleComic = () => {
    return singleComic
}







export const getSavedComics = () => {
    return fetch("http://localhost:3000/comics")
    .then(res => res.json())
    .then(parsedSavedComics => {
        savedComics = parsedSavedComics
    })
}

export const useSavedComics = () => {
    return savedComics.slice()
}


export const saveComic = comic => {
    return fetch("http://localhost:3000/comics", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comic)
    })
    .then(getSavedComics)
    .then(dispatchStateChangeEvent)
}