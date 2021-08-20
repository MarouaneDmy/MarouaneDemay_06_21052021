const lightbox = document.querySelector(".lightbox")
const close = document.querySelector(".closeCarrousel")
const precedent = document.querySelector(".arrow-left")
const suivant = document.querySelector(".arrow-right")

export default class Carrousel {
    // close modal form
    launchLightbox() {
        lightbox.style.display = "flex"
    }

    // close modal form
    closeLightbox() {
        lightbox.style.display = "none"
    }

    displayMedia(data) {
        const carrousel = document.querySelector(".carrousel-body")
        let myVideo = document.createElement('video')
        let myImage = document.createElement('img')
        let mySource = document.createElement('source')
        let myTitle = document.createElement('h2')

        if (carrousel != "") {
            carrousel.innerHTML = "";
        }

        if (data.image !== undefined) {
            myImage.src = "../images/medias/" + data.image
            carrousel.appendChild(myImage)

            carrousel.appendChild(myVideo)
            carrousel.removeChild(myVideo)
        }
        
        if (data.image === undefined) {
            myVideo.controls = "controls"
            mySource.src = "../images/medias/" + data.video
            mySource.type = "video/mp4"

            carrousel.appendChild(myVideo)
            myVideo.appendChild(mySource)

            carrousel.appendChild(myImage)
            carrousel.removeChild(myImage)
        } 

        myTitle.textContent = data.title
        carrousel.appendChild(myTitle)
    }

    display(data) {
        const dataMedia = document.querySelectorAll(".mediaList")

        window.addEventListener("keydown", function(event){
            let elemCourant = document.activeElement;
           
            if(elemCourant.classList.contains("articleLink") && event.key === "Enter") {
                const i = elemCourant.dataset.index
                const myCarrousel = new Carrousel(data)
                myCarrousel.launchLightbox()
                myCarrousel.displayMedia(data[i])

                let e = parseInt(i)

                // ------------------ SUIVANT ------------------- //
                suivant.addEventListener("click", function(){
                    e = e + 1
                    if (e >= dataMedia.length){
                        e = 0
                    }

                    myCarrousel.displayMedia(data[e])
                })

                window.addEventListener("keydown", function(event){
                    if(event.key === "ArrowRight") {
                        e = e + 1
                        
                        if (e >= dataMedia.length){
                            e = 0
                        }
                        myCarrousel.displayMedia(data[e])
                    }
                })

                // ----------------- PRECEDENT ------------------ //
                precedent.addEventListener("click", function(){         
                    e = e - 1 
                    if (e < 0){
                        e = dataMedia.length - 1
                    }   
                    
                    myCarrousel.displayMedia(data[e])
                })

                window.addEventListener("keydown", function(event){
                    if(event.key === "ArrowLeft") {
                        e = e - 1
                        if (e < 0){
                            e = dataMedia.length - 1
                        }

                        myCarrousel.displayMedia(data[e])
                    }
                })
            }
        })
        
        for (let i = 0; i < dataMedia.length; i++) {

            dataMedia[i].addEventListener("click", function(event){
                const myCarrousel = new Carrousel(data)
                myCarrousel.launchLightbox()
                console.log(event.currentTarget.dataset.index)
                myCarrousel.displayMedia(data[i])

                let e = parseInt(event.currentTarget.dataset.index)

                // ------------------ SUIVANT ------------------- //
                suivant.addEventListener("click", function(){
                    e = e + 1
                    if (e >= dataMedia.length){
                        e = 0
                    }

                    myCarrousel.displayMedia(data[e])
                })

                window.addEventListener("keydown", function(event){
                    if(event.key === "ArrowRight") {
                        e = e + 1
                        
                        if (e >= dataMedia.length){
                            e = 0
                        }
                        myCarrousel.displayMedia(data[e])
                    }
                })

                // ----------------- PRECEDENT ------------------ //
                precedent.addEventListener("click", function(){         
                    e = e - 1 
                    if (e < 0){
                        e = dataMedia.length - 1
                    }   
                    
                    myCarrousel.displayMedia(data[e])
                })

                window.addEventListener("keydown", function(event){
                    if(event.key === "ArrowLeft") {
                        e = e - 1
                        if (e < 0){
                            e = dataMedia.length - 1
                        }

                        myCarrousel.displayMedia(data[e])
                    }
                })

            })

        }
        close.addEventListener("click", this.closeLightbox)  
        
        window.addEventListener("keydown", function(event){
            const myCarrousel = new Carrousel(data)
            if(event.key === "Escape") {
                myCarrousel.closeLightbox()
            }
        })
    }
}