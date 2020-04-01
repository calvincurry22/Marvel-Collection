import { getSavedComics, useSavedComics } from "./CharacterDataProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".comicListAside")



export const renderSavedComics = (savedComicsCollection) => {
    contentTarget.innerHTML = savedComicsCollection.map(savedComic => {
        return `
        <div class="singleSavedComicContainer" id="savedComic--${savedComic.id}">
        <a id="savedComicLink" href ="${savedComic.comicLink}"><img id="savedComicImage" src="${savedComic.imagePath}/portrait_small.${savedComic.imageExtension}" alt="" srcset=""></a>
        <p class="savedComicTitle">${savedComic.comicTitle}</p>
        </div>
    `
    }).join(" ")
}

export const ComicList = () => {
    const comicsArray = useSavedComics()
    renderSavedComics(comicsArray)
}