

import { getCharacters, useCharacters, getSavedComics } from "./CharacterDataProvider.js";
import { CharacterSelect } from "./CharacterSelect.js";
import { CharacterPreview } from "./CharacterPreview.js";
import "./CharacterList.js"
import { ComicList } from "./CharacterList.js";


getCharacters()
.then(CharacterPreview)
    .then(CharacterSelect)
    
getSavedComics()
    .then(ComicList)


    




   


