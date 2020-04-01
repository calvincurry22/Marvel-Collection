import { Character } from "./Character.js"
import { CharacterSelect } from "./CharacterSelect.js"
import { useCharacters, saveComic } from "./CharacterDataProvider.js"
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

        const linkToComic = document.querySelector("#comicLink").getAttribute("href")
        const imageOfComic = document.querySelector("#comicImage").getAttribute("src")
        
        const newComicObject = {
            comicLink: linkToComic,
            comicImage: imageOfComic,
            comicID: idOfComic
           
        }
        saveComic(newComicObject)
        ComicList()
    }
})
