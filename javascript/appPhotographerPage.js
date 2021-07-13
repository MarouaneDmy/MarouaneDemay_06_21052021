import DataManager from "./DataManager.js"
import Photographe from "./Photographe.js"
import Modal from "./Modal.js"


(async function()  {
    
    // DATAMANAGER
    const dataManager = new DataManager()
    const data = await dataManager.getData()
    const photographerId = dataManager.getPhotographerId()
    const foundPhotographerById = data.photographers.find(photographers => photographers.id == photographerId)
    const foundMediaByPhotographerId = data.media.filter(media => media.photographerId == photographerId)

    // PHOTOGRAPHE
    const photographe = new Photographe(foundPhotographerById)
    photographe.trierOpenClose()
    photographe.display()
    photographe.setMedia(foundMediaByPhotographerId)
    photographe.sortMedias(foundMediaByPhotographerId)
    photographe.additionOfLikes(foundMediaByPhotographerId)
    photographe.carrouselMedias(foundMediaByPhotographerId)

    // MODAL
    const modal = new Modal(foundPhotographerById)
    modal.display()
})()






 