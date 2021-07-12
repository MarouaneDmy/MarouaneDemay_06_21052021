import DataManager from "./DataManager.js"
import Photographe from "./Photographe.js"

(async function()  {
    // DATAMANAGER
    const dataManager = new DataManager()
    const data = await dataManager.getData()
    const foundPhotographer = data.photographers.filter(photographers => photographers)
    const photographe = new Photographe(foundPhotographer)
    photographe.displayPhotographers(foundPhotographer)
    photographe.filterTagList()
    photographe.sortByTag(data)

})()





