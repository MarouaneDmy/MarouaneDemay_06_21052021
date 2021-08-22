import Media from "./Media.js"

const photos = document.querySelector(".photos")

export default class Video extends Media {
    constructor(data) {
        super(data)
        this.video = data.video      
    }

    // Fais apparaître les vidéos liés à l'ID du photographe
    display(index) {

        let myArticle = document.createElement('article')
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

        mySource.src = "../images/medias/" + this.video
        mySource.type = "video/mp4"
        myVid.setAttribute("aria-label", "Vidéo " + this.title)
        myTitle.textContent = this.title
        myLikes.textContent = this.likes

        photos.appendChild(myArticle)

        myArticle.appendChild(myVid)
        
        myArticle.appendChild(myTitle)
        myArticle.appendChild(myLikes)
        myArticle.appendChild(heart)
        
        myVid.appendChild(mySource)
             
    }
}