// DOM Elements
const modal = document.querySelector(".modal")
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelector(".modal-btn")
const modalClose = document.querySelector(".close")

export default class Modal {

  static async getData() {
    let response = await fetch("../javascript/json/data.json")
    let data = await response.json()
    return data
  }

  static getPhotographerId() { 
    try {
        let url_string = (window.location.href).toLowerCase()
        let url = new URL(url_string)
        let id = url.searchParams.get("id")
        return id
    } catch (err) {
        console.log("issues with Parsing URL Parameter's - " + err)
    }
}
  
  // launch modal form
  static launchModal() {
    modalbg.style.display = "flex"
  }

  // close modal form
  static closeModal() {
    modalbg.style.display = "none"
  }

  static addPhotographerNameModal(data) {
    let myTitle = document.createElement('h2')
    let myName = document.createElement('h2')

    myTitle.textContent = "Contactez-moi"
    myName.textContent = data.name

    modal.prepend(myName)
    modal.prepend(myTitle)   
  }

  static async displayModal() {
    
    const data = await this.getData()

    const photographerId = this.getPhotographerId()
    
    const foundPhotographerById = data.photographers.find(photographers => photographers.id == photographerId)

    this.addPhotographerNameModal(foundPhotographerById)

    // launch modal event
    modalBtn.addEventListener("click", this.launchModal)

    // close modal event
    modalClose.addEventListener("click", this.closeModal)
    
  }

}

