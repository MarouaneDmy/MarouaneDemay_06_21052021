import DataManager from "./DataManager.js"
import Navbar from "./Navbar.js"
import Photographe from "./Photographe.js"

(async function()  {
    
    // DATAMANAGER
    const dataManager = new DataManager()
    const chemin = "./javascript/json/data.json"
    const data = await dataManager.getData(chemin)
    const photographerTag = dataManager.getPhotographerTag()
    const foundPhotographer = data.photographers.filter(photographers => photographers)

    // PHOTOGRAPHE
    const photographe = new Photographe(foundPhotographer)
    photographe.displayPhotographers(foundPhotographer)
    photographe.filterTagList()
    photographe.sortByTag(data, photographerTag)

    // NAVBAR
    const navbar = new Navbar()
    navbar.display()

})()





