import Media from "./Media.js"

const photos = document.querySelector(".photos")

export default class Image extends Media {
    constructor(data) {
        super(data)
        this.image = data.image
    }

    // Fais apparaître les images liés à l'ID du photographe
    display(index) {
        let myArticle = document.createElement('article')
        let imgLink = document.createElement('a')
        let myImg = document.createElement('img')
        let myTitle = document.createElement('h2')
        let myLikes = document.createElement('p')
        let heart = document.createElement('em')

        imgLink.classList.add("articleLink")
        imgLink.dataset.index = index
        myArticle.classList.add("detailsMedia")
        myImg.classList.add("mediaList")
        myImg.dataset.index = index
        myTitle.classList.add("title")
        myLikes.classList.add("myLikes")
        heart.classList.add("fas")
        heart.classList.add("fa-heart")

        imgLink.href = "#"
        imgLink.src = "../images/medias/" + this.image
        myImg.src = "../images/medias/" + this.image
        myImg.alt = "Photo" + this.title
        myTitle.textContent = this.title
        myLikes.textContent = this.likes
        
        photos.appendChild(myArticle)
        myArticle.appendChild(imgLink)
        imgLink.appendChild(myImg)

        myArticle.appendChild(myTitle)
        myArticle.appendChild(myLikes)
        myArticle.appendChild(heart)

    }
}