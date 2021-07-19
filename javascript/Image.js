import Media from "./Media.js"

const photos = document.querySelector(".photos")

export default class Image extends Media {
    constructor(data) {
        super(data)
        this.image = data.image
    }

    // Fais apparaître les images liés à l'ID du photographe
    display() {
      
        let myArticle = document.createElement('article')
        let myImg = document.createElement('img')
        let myTitle = document.createElement('h2')
        let myLikes = document.createElement('p')
        let heart = document.createElement('i')

        myArticle.classList.add("detailsMedia")
        myTitle.classList.add("title")
        heart.classList.add("fas")
        heart.classList.add("fa-heart")

        myImg.src = "../images/Medias/" + this.image
        myTitle.textContent = this.title
        myLikes.textContent = this.likes

        photos.appendChild(myArticle)
        myArticle.appendChild(myImg)

        myArticle.appendChild(myTitle)
        myArticle.appendChild(myLikes)
        myLikes.appendChild(heart)

        return myArticle

    }
}