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
        let imgLink = document.createElement('a')
        let myImg = document.createElement('img')
        let myTitle = document.createElement('h2')
        let myLikes = document.createElement('p')
        let heart = document.createElement('i')

        imgLink.classList.add("articleLink")
        myArticle.classList.add("detailsMedia")
        myTitle.classList.add("title")
        heart.classList.add("fas")
        heart.classList.add("fa-heart")

        imgLink.href = "#"
        imgLink.src = "../images/medias/" + this.image
        myImg.src = "../images/medias/" + this.image
        myTitle.textContent = this.title
        myLikes.textContent = this.likes

        photos.appendChild(myArticle)
        myArticle.appendChild(imgLink)
        imgLink.appendChild(myImg)

        myArticle.appendChild(myTitle)
        myArticle.appendChild(myLikes)
        myLikes.appendChild(heart)

        return myArticle

    }
}