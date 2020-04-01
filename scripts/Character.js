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
                    <div id="imageDescriptionContainer">
                        <img id="characterImage" src="${characterObj.thumbnail.path}/portrait_incredible.${characterObj.thumbnail.extension}" alt="" srcset="">
                        <p id="characterDescriptionHeader">Description:</p>
                        <p id="characterDescription">${characterObj.description}</p>
                    </div>
                    <h2 id="comicsHeader">Associated Comics</h2>
                    <div class="comicsContainer" style="overflow-y:auto;">
                        ${comicImages.map( comicObject => {
                            if(!comicObject.images[0]) {
                                return;
                            }
                            return `
                                <div id="comicDetailsContainer">
                                <a id="comicLink" href="${comicObject.urls[0].url}"><img id="comicImage" src="${comicObject.images[0].path}/portrait_xlarge.${comicObject.images[0].extension}" alt="" srcset=""></a>
                                <button class="saveComicButton" id="save--${comicObject.id}">Save Comic</button>
                                </div>
                                `
                        }).join("")}
                    </div>

            

                `
              
        })
        
}

