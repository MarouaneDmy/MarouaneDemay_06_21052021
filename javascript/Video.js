import Media from "./Media.js"

const photos = document.querySelector(".photos")

export default class Video extends Media {
    constructor(data) {
        super(data)
        this.video = data.video      
    }

    display(index) {

        let myArticle = document.createElement('article')
        let vidLink = document.createElement('a')
        let myVid = document.createElement('video')
        let mySource = document.createElement('source')
        let myTitle = document.createElement('h2')
        let myLikes = document.createElement('p')
        let heart = document.createElement('em')

        myArticle.classList.add("detailsMedia")
        myVid.classList.add("articleLink")
        myVid.classList.add("mediaList")
        myVid.dataset.index = index
        myTitle.classList.add("title")
        myLikes.classList.add("myLikes")
        mySource.classList.add("source")
        heart.classList.add("fas")
        heart.classList.add("fa-heart")

        vidLink.href = "#"
        vidLink.src = "../images/medias/" + this.video
        mySource.src = "../images/medias/" + this.video
        mySource.type = "video/mp4"
        myTitle.textContent = this.title
        myLikes.textContent = this.likes

        photos.appendChild(myArticle)

        myArticle.appendChild(vidLink)
        vidLink.appendChild(myVid)
        
        myArticle.appendChild(myTitle)
        myArticle.appendChild(myLikes)
        myArticle.appendChild(heart)
        
        myVid.appendChild(mySource)
             
    }

    displayLightbox() {
        const carrousel = document.querySelector(".carrousel-body")
        let myVideo = document.createElement('video')
        let mySource = document.createElement('source')
        let myTitle = document.createElement('h2')

        if (carrousel != "") {
            carrousel.innerHTML = "";
        }

        myVideo.controls = "controls"
        mySource.src = "../images/medias/" + data.video
        mySource.type = "video/mp4"

        carrousel.appendChild(myVideo)
        myVideo.appendChild(mySource)

        myTitle.textContent = data.title
        carrousel.appendChild(myTitle)
    }
}