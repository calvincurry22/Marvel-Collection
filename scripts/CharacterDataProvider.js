

let characters = []

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

