import { useCharacters } from "./CharacterDataProvider.js";


const selectContainer = document.querySelector(".characterSelectContainer")
const eventHub = document.querySelector(".container")

export const CharacterSelect = () => {
    
    const marvelDataArray = [useCharacters()]
    const extractedCharacterArray = marvelDataArray[0].data.results

    const renderCharacterSelect = (array) => {
        selectContainer.innerHTML = `
            
                <select class="dropdown" id="characterSelect"> 
                <option value="0">Select a character</option>
                ${array.map(
                    characterObject => {
                        return `<option>${characterObject.name}</option>`
                    }  
                )}
                </select>
                
        `
    }
    renderCharacterSelect(extractedCharacterArray)
}



eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "characterSelect") {
        const theCharacterChosen = changeEvent.target.value

        const characterChosenEvent = new CustomEvent("characterSelected", {
            detail: {
                character: theCharacterChosen
            }
        })
        eventHub.dispatchEvent(characterChosenEvent)
    }
    
})