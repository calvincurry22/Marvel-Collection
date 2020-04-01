import { getSavedComics, useSavedComics } from "./CharacterDataProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".comicListContainer")



export const renderSavedComics = (savedComicsCollection) => {
    contentTarget.innerHTML = savedComicsCollection.map(savedComic => {
        return `
        <div id="savedComic--${savedComic.id}">
        <a id="savedComicLink" href ="${savedComic.comicLink}"><img id="savedComicImage" src="${savedComic.comicImage}" alt="" srcset=""></a>
        </div>
    `
    }).join(" ")
}

export const ComicList = () => {
    const comicsArray = useSavedComics()
    renderSavedComics(comicsArray)
}