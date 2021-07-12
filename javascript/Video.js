import Media from "./Media.js"

const photos = document.querySelector(".photos")

export default class Video extends Media {
    constructor(data) {
        super(data)
        this.video = data.video      
    }

    display() {

        let myArticle = document.createElement('article')
        let myVid = document.createElement('video')
        let mySource = document.createElement('source')
        let myTitle = document.createElement('h2')
        let myLikes = document.createElement('p')
        let heart = document.createElement('i')

        myArticle.classList.add("detailsMedia")
        heart.classList.add("fas")
        heart.classList.add("fa-heart")

        myVid.controls = "controls"
        mySource.src = "../images/Medias/" + this.video
        mySource.type = "video/mp4"
        myTitle.textContent = this.title
        myLikes.textContent = this.likes

        photos.appendChild(myArticle)
        myArticle.appendChild(myVid)
        
        myArticle.appendChild(myLikes)
        myLikes.appendChild(heart)
        myArticle.appendChild(myTitle)
        
        myVid.appendChild(mySource)
             
    }
}