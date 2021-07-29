// DOM Elements
const modal = document.querySelector(".modal")
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelector(".modal-btn")
const modalClose = document.querySelector(".close")
const sendBtn = document.querySelector(".envoyer")

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

  sendData() {
    sendBtn.addEventListener("click", function(){
      const modal = new Modal(this.name)
      const prenom = document.querySelector("#prenom")
      const nom = document.querySelector("#nom")
      const email = document.querySelector("#email")
      const message = document.querySelector("#message")

      console.log(prenom.value)
      console.log(nom.value)
      console.log(email.value)
      console.log(message.value)

      prenom.value = ""
      nom.value = ""
      email.value = ""
      message.value = ""

      modal.closeModal()
    })
  }

  display() {

    this.addPhotographerName()

    // launch modal event
    modalBtn.addEventListener("click", this.launchModal)

    // close modal event
    modalClose.addEventListener("click", this.closeModal)

    window.addEventListener("keydown", function(event){
      const modal = new Modal(this.name)
      if(event.key === "Escape") {
          modal.closeModal()
      }
    })

    this.sendData()
    
  }
}

