const lightbox_btn = document.querySelectorAll(".lightbox-btn")
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

    displayMedia(data, title) {
        const carrousel = document.querySelector(".carrousel-body")
        const source = document.querySelector(".source")
        let myImage = document.createElement('img')
        let myVideo = document.createElement('video')
        let mySource = document.createElement('source')
        let myTitle = document.createElement('h2')

        if (carrousel != "") {
            carrousel.innerHTML = "";
        }

        if (data.firstChild.src !== "") {
            myImage.src = data.firstChild.src
            carrousel.appendChild(myImage)

            carrousel.appendChild(myVideo)
            carrousel.removeChild(myVideo)
        }

        if (data.firstChild.src.includes(".mp4") === true) {
            myVideo.controls = "controls"
            mySource.src = source.src
            mySource.type = "video/mp4"

            carrousel.appendChild(myVideo)
            myVideo.appendChild(mySource)

            carrousel.appendChild(myImage)
            carrousel.removeChild(myImage)
        }

        myTitle.textContent = title.innerHTML
        carrousel.appendChild(myTitle)
    }

    display(data) {
        const dataMedia = data
        const title = document.querySelectorAll(".title")

        for (let i = 0; i < dataMedia.length; i++) {    

            dataMedia[i].firstChild.addEventListener("click", function(){
                const myCarrousel = new Carrousel(data)
                myCarrousel.launchLightbox()
                myCarrousel.displayMedia(dataMedia[i], title[i])

                let e = i


                // ------------------ SUIVANT ------------------- //
                suivant.addEventListener("click", function(){
                    e = e + 1
                    if (e >= dataMedia.length){
                        e = 0
                    }

                    myCarrousel.displayMedia(dataMedia[e], title[e])
                })

                window.addEventListener("keydown", function(event){
                    if(event.key === "ArrowRight") {
                        e = e + 1
                        if (e >= dataMedia.length){
                            e = 0
                        }

                        myCarrousel.displayMedia(dataMedia[e], title[e])
                    }
                })

                // ----------------- PRECEDENT ------------------ //
                precedent.addEventListener("click", function(){         
                    e = e - 1 
                    if (e < 0){
                        e = dataMedia.length - 1
                    }   
                    
                    myCarrousel.displayMedia(dataMedia[e], title[e])
                })

                window.addEventListener("keydown", function(event){
                    if(event.key === "ArrowLeft") {
                        e = e - 1
                        if (e < 0){
                            e = dataMedia.length - 1
                        }

                        myCarrousel.displayMedia(dataMedia[e], title[e])
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