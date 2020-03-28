

let characters = []

export const getCharacters = () => {
    return fetch("https://gateway.marvel.com:443/v1/public/characters?modifiedSince=2015-09-18T15%3A54%3A04-0400&limit=100&apikey=6d001b15224bd9411b67705ef5d04bb5")
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

