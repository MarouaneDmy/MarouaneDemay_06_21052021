const photographe = document.querySelector(".photographe")
const prix = document.querySelector(".prix")
let tagList = []

export default class Photographe {
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

    static displayPhotographerById(data) {
    
        let myArticle = document.createElement('article')
        let myImg = document.createElement('img')
        let myName = document.createElement('p')
        let myCity = document.createElement('p')
        let myTagline = document.createElement('p')
        let myPrice = document.createElement('p')
        let myPara3 = document.createElement('p')
        let myTags
    
        for (const [i, tag] of data.tags.entries()) {
            myTags = document.createElement('span')
            myTags.textContent = "#" + data.tags[i]
            tagList.push(data.tags[i])
            myPara3.appendChild(myTags)
            myTags.classList.add("tags")
        }
    
        myImg.src = "../images/Photographers/" + data.portrait
        myName.textContent = data.name
        myCity.textContent = data.city + ", " + data.country
        myTagline.textContent = data.tagline
        myPrice.textContent = data.price + "€ / jour"
    
        myArticle.classList.add("informations")
        myName.classList.add("name")
        myCity.classList.add("city")
        myTagline.classList.add("tagline")
        myPara3.classList.add("myTags")
    
        photographe.appendChild(myArticle)
        photographe.appendChild(myImg)
        myArticle.appendChild(myName)
        myArticle.appendChild(myCity)
        myArticle.appendChild(myTagline)
        myArticle.appendChild(myPara3)
        prix.appendChild(myPrice)
    
    }

    static async photographerInformation() {
    
        const data = await this.getData()
    
        const photographerId = this.getPhotographerId()
    
        const foundPhotographerById = data.photographers.find(photographers => photographers.id == photographerId)
    
        this.displayPhotographerById(foundPhotographerById)

    }
}


