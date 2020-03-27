let comics = []
const characterContainer = document.querySelector(".previewContainer")

export const Character = (characterObj) => {
    const getComics = () => {
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterObj.id}/comics?limit=20&apikey=6d001b15224bd9411b67705ef5d04bb5`)
            .then(response => response.json())
            .then(parsedComics => {
                comics = parsedComics
            })
    }

    const useComics = () => {
        return comics
    }

    getComics()
        .then( () => {

            const comicCollection = useComics()
            const comicImages = comicCollection.data.results
            console.log(comicImages)
            characterContainer.innerHTML=
                 `
                    <h2 id="characterName">${characterObj.name}</h2>
                    <img src="${characterObj.thumbnail.path}/portrait_uncanny.${characterObj.thumbnail.extension}" alt="" srcset="">
                    <p>Description: ${characterObj.description}</p>
                    ${comicImages.map( comicObject => {
                        return `<img src="${comicObject.images[0].path}/portrait_xlarge.${comicObject.images[0].extension}" alt="" srcset="">`
                    })}

            

                `
        })
}

