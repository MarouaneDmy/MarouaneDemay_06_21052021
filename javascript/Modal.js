// DOM Elements
const modal = document.querySelector(".modal")
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelector(".modal-btn")
const modalClose = document.querySelector(".close")

export default class Modal {
  constructor(data) {
    this.name = data.name
  }

  // launch modal form
  launchModal() {
    modalbg.style.display = "flex"
  }

  // close modal form
  closeModal() {
    modalbg.style.display = "none"
  }

  addPhotographerName() {
    let myTitle = document.createElement('h2')
    let myName = document.createElement('h2')

    myTitle.textContent = "Contactez-moi"
    myName.textContent = this.name

    modal.prepend(myName)
    modal.prepend(myTitle)   
  }

  display() {

    this.addPhotographerName()

    // launch modal event
    modalBtn.addEventListener("click", this.launchModal)

    // close modal event
    modalClose.addEventListener("click", this.closeModal)
    
  }

}

