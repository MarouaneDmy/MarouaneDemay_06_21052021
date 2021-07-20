import DataManager from "./DataManager.js"
import Photographe from "./Photographe.js"
import Modal from "./Modal.js"
import Carrousel from "./Carrousel.js"


(async function()  {
    
    // DATAMANAGER
    const dataManager = new DataManager()
    const chemin = "../javascript/json/data.json"
    const data = await dataManager.getData(chemin)
    const photographerId = dataManager.getPhotographerId()
    const foundPhotographerById = data.photographers.find(photographers => photographers.id == photographerId)
    const foundMediaByPhotographerId = data.media.filter(media => media.photographerId == photographerId)

    // PHOTOGRAPHE
    const photographe = new Photographe(foundPhotographerById)
    photographe.trierOpenClose()
    photographe.display()
    photographe.setMedia(foundMediaByPhotographerId)
    
    const arrayMedia = photographe.medias
    photographe.sortMedias(foundMediaByPhotographerId)
    photographe.additionOfLikes(foundMediaByPhotographerId)

    

    // MODAL
    const modal = new Modal(foundPhotographerById)
    modal.display()

    // CARROUSEL 
    const carrousel = new Carrousel()
    carrousel.display(arrayMedia)
})()






 