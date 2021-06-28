const photos = document.querySelector(".photos")
const prix = document.querySelector(".prix")
const trier = document.querySelector(".trier")
const popularite = document.querySelector(".popularite")
const date = document.querySelector(".date")
const titre = document.querySelector(".titre")

export default class Medias {
    static async getData() {
        let response = await fetch("../javascript/json/data.json")
        let data = await response.json()
        return data
    }

    static getPhotographerId() { 
        try {
            let url_string = (window.location.href).toLowerCase()
            let url = new URL(url_string)
            let id = url.searchParams.get("id")
            return id
        } catch (err) {
            console.log("issues with Parsing URL Parameter's - " + err)
        }
    }

    static dropdownOpen() {

        trier.style.height = "170px"

    }

    // Fais apparaître les images liés à l'ID du photographe
    static displayMediasByPhotographerId(data) {

        if (photos != "") {
            photos.innerHTML = "";
        }

        for (const media of data) {
            
            let myArticle = document.createElement('article')
            let myImg = document.createElement('img')
            let myVid = document.createElement('video')
            let mySource = document.createElement('source')
            let myTitle = document.createElement('h2')
            let myLikes = document.createElement('p')
            let heart = document.createElement('i')

            myArticle.classList.add("detailsMedia")
            heart.classList.add("fas")
            heart.classList.add("fa-heart")

            myImg.src = "../images/Medias/" + media.image
            myTitle.textContent = media.title
            myLikes.textContent = media.likes

            photos.appendChild(myArticle)
            myArticle.appendChild(myImg)

            if (media.image === undefined) {
                myVid.controls = "controls"
                mySource.src = "../images/Medias/" + media.video
                mySource.type = "video/mp4"
                

                myArticle.removeChild(myImg)
                myArticle.appendChild(myVid)
                myVid.appendChild(mySource)
            }

            myArticle.appendChild(myLikes)
            myLikes.appendChild(heart)
            myArticle.appendChild(myTitle)
            
        }   
    }

    static sortByLikes(data) {

        data.sort(function(a, b) {
            return b.likes - a.likes
        })

    }

    static sortByDate(data) {

        data.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        })

    } 

    static sortByTitre(data) {

        data.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        })

    } 

    static additionOfLikes(data) {

        let array = []
        let sum = 0;

        for (const media of data) {
            array.push(media.likes)
        }

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        let mySumLikes = document.createElement('p')
        let heart = document.createElement('i')


        mySumLikes.classList.add("likes")
        heart.classList.add("fas")
        heart.classList.add("fa-heart")

        mySumLikes.textContent = sum

        prix.appendChild(mySumLikes)
        prix.appendChild(heart)

    }

    static async photographerMedias() {
    
        const data = await this.getData()
    
        const photographerId = this.getPhotographerId()

        const foundMediaByPhotographerId = data.media.filter(media => media.photographerId == photographerId)

        this.additionOfLikes(foundMediaByPhotographerId)

        popularite.addEventListener("click", function(){
            Medias.sortByLikes(foundMediaByPhotographerId)
            Medias.displayMediasByPhotographerId(foundMediaByPhotographerId)
        })

        date.addEventListener("click", function(){
            Medias.sortByDate(foundMediaByPhotographerId)
            Medias.displayMediasByPhotographerId(foundMediaByPhotographerId)
        })

        titre.addEventListener("click", function(){
            Medias.sortByTitre(foundMediaByPhotographerId)
            Medias.displayMediasByPhotographerId(foundMediaByPhotographerId)
        })

        this.displayMediasByPhotographerId(foundMediaByPhotographerId)
        
    }
}