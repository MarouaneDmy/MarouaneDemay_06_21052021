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
        myTitle.classList.add("title")
        mySource.classList.add("source")
        heart.classList.add("fas")
        heart.classList.add("fa-heart")

/*         myVid.controls = "controls" */
        mySource.src = "../images/medias/" + this.video
        mySource.type = "video/mp4"
        myTitle.textContent = this.title
        myLikes.textContent = this.likes

        photos.appendChild(myArticle)
        myArticle.appendChild(myVid)
        
        myArticle.appendChild(myTitle)
        myArticle.appendChild(myLikes)
        myLikes.appendChild(heart)
        
        myVid.appendChild(mySource)

        return myArticle
             
    }
}