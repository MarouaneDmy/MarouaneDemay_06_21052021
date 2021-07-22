import Media from "./Media.js"

const photos = document.querySelector(".photos")

export default class Video extends Media {
    constructor(data) {
        super(data)
        this.video = data.video      
    }

    display() {

        let myArticle = document.createElement('article')
        let vidLink = document.createElement('a')
        let myVid = document.createElement('video')
        let mySource = document.createElement('source')
        let myTitle = document.createElement('h2')
        let myLikes = document.createElement('p')
        let heart = document.createElement('i')

        vidLink.classList.add("articleLink")
        myArticle.classList.add("detailsMedia")
        myTitle.classList.add("title")
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
        myLikes.appendChild(heart)
        
        myVid.appendChild(mySource)

        return myArticle
             
    }
}