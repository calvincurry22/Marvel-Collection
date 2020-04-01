import { Character } from "./Character.js"
import { CharacterSelect } from "./CharacterSelect.js"
import { useCharacters, saveComic, getComics, getSingleComic, useSingleComic } from "./CharacterDataProvider.js"
import { ComicList } from "./CharacterList.js"




const previewContainer = document.querySelector(".previewContainer")
const characterContainer = document.querySelector(".characterContainer")
const eventHub = document.querySelector(".container")


export const CharacterPreview = () => {

   previewContainer.innerHTML = `
        <h1 class="previewHeader">Preview Character Info Here</h1>
        <div class="characterContainer"></div>
   `
}

//when a character is selected, character.js should appear in the character preview component

eventHub.addEventListener("characterSelected", customEvent => {

    const marvelDataArray = [useCharacters()]
    
    const extractedCharacterArray = marvelDataArray[0].data.results
    console.log(extractedCharacterArray)
    
    let foundCharacter = extractedCharacterArray.find(charObject => {
        if(charObject.name === customEvent.detail.character) {
            return true
        }
        return false
        
    })
    console.log(foundCharacter.stories.items[0].name)
    Character(foundCharacter)

})



previewContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("save--")) {
        const [prefix, idOfComic] = clickEvent.target.id.split("--")

        getSingleComic(idOfComic)
            .then( () => {

                const theSingleComic = useSingleComic()
                const theSingleComicTitle = theSingleComic.data.results[0].title
                const theSingleComicDetails = theSingleComic.data.results[0].urls[0].url
                const theSingleComicImagePath = theSingleComic.data.results[0].images[0].path
                const theSingleComicImageExt = theSingleComic.data.results[0].images[0].extension

                const newComicObject = {
                    comicTitle: theSingleComicTitle,
                    comicLink: theSingleComicDetails,
                    imagePath: theSingleComicImagePath,
                    imageExtension: theSingleComicImageExt
                }
                saveComic(newComicObject)
                ComicList()
            })
        
        
        
           
        
        
        
    }
})
