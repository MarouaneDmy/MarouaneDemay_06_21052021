import MediaFactory from "./MediaFactory.js"
import Carrousel from "./Carrousel.js"

//----------- DOM ELEMENTS ACCUEIL ------------// 
const bground = document.querySelector(".photographes")
const navTag = document.querySelector(".tagList")

//----------- DOM ELEMENTS PAGE PHOTOGRAPHE ------------// 
const photographe = document.querySelector(".photographe")
const photos = document.querySelector(".photos")
const prix = document.querySelector(".prix")

const trier = document.querySelector(".trier")
const popularite = document.querySelector(".popularite")
const date = document.querySelector(".date")
const titre = document.querySelector(".titre")
const arrow = document.getElementById("arrow")
let tagList = []

export default class Photographe {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.city = data.city
        this.country = data.country
        this.tags = data.tags
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
        this.medias = []
    }

    display() {
        let myArticle = document.createElement('article')
        let myImg = document.createElement('img')
        let myName = document.createElement('p')
        let myCity = document.createElement('p')
        let myTagline = document.createElement('p')
        let myPrice = document.createElement('p')
        let myPara3 = document.createElement('p')
        let myTags
    
        for (const [i, tag] of this.tags.entries()) {
            myTags = document.createElement('span')
            myTags.textContent = "#" + this.tags[i]
            tagList.push(this.tags[i])
            myPara3.appendChild(myTags)
            myTags.classList.add("tags")
        }
    
        myImg.src = "../images/Photographers/" + this.portrait
        myName.textContent = this.name
        myCity.textContent = this.city + ", " + this.country
        myTagline.textContent = this.tagline
        myPrice.textContent = this.price + "€ / jour"
    
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

    displayPhotographers(data) {
        
        if (bground != "") {
            bground.innerHTML = "";
        } 

        for (const photographe of data) {
            let myArticle = document.createElement('article')
            let myLink = document.createElement('a')
            let myImg = document.createElement('img')
            let myH2 = document.createElement('h2')
            let myH3 = document.createElement('h3')
            let myPara1 = document.createElement('p')
            let myPara2 = document.createElement('p')
            let myPara3 = document.createElement('p')
            let myTags
    
            for (const [i, tag] of photographe.tags.entries()) {
                myTags = document.createElement('span')
                myTags.textContent = "#" + photographe.tags[i]
                tagList.push(photographe.tags[i])
                myPara3.appendChild(myTags)
                myTags.classList.add("tags")
            }
    
            myArticle.classList.add("detailsPhotographes")
            myPara2.classList.add("price")
    
            myLink.href = "./html/photographer-page.html?id=" + photographe.id
            myImg.src = "images/Photographers/" + photographe.portrait
            myH2.textContent = photographe.name
            myH3.textContent = photographe.city + ", " + photographe.country
            myPara1.textContent = photographe.tagline
            myPara2.textContent = photographe.price + "€/jour"
    
            bground.appendChild(myArticle)
            myArticle.appendChild(myLink)
            myLink.appendChild(myImg)
            myLink.appendChild(myH2)
            myArticle.appendChild(myH3)
            myArticle.appendChild(myPara1)
            myArticle.appendChild(myPara2)
            myArticle.appendChild(myPara3)
        }   
    }

    strUcFirst(a) {
        return (a+'').charAt(0).toUpperCase()+a.substr(1)
    }

    filterTagList() {
        let myPara1 = document.createElement('p')
        let myTags
    
        const filterTagList = [...new Set(tagList)]
    
        let e = 0
        for (const tag of filterTagList) {
            myTags = document.createElement('span')
            myTags.textContent = "#" + this.strUcFirst(filterTagList[e])
            myPara1.appendChild(myTags)
            myTags.classList.add("tags")
            myTags.classList.add("sortTag")
            myTags.setAttribute("name", tag)
            e += 1
        }
        navTag.appendChild(myPara1)
    }

    setMedia(data) {
        if (photos != "") {
            photos.innerHTML = "";
        } 

        let type = ""

        for (const dataMedia of data) {

            type = "image"
    
            if (dataMedia.image === undefined) {
                type = "image"
            } 
            
            const media = MediaFactory.createMedia(type, dataMedia)
            this.medias.push(media)
        }
    } 

    sortByTag(data) {
        let photographerTags = document.querySelectorAll(".sortTag")
        let photographerTag

        for (const tag of photographerTags) {
            tag.addEventListener("click", function(){   
                photographerTag = tag.getAttribute("name") 
                const foundPhotographerByTag = data.photographers.filter(photographers => photographers.tags.includes(photographerTag))
                const photographe = new Photographe(foundPhotographerByTag)
                photographe.displayPhotographers(foundPhotographerByTag)
            })
        }
    }

    sortByLikes(data) {

        data.sort(function(a, b) {
            return b.likes - a.likes
        })
    }

    sortByDate(data) {

        data.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        })
        
    } 

    sortByTitre(data) {

        data.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        })

    } 

    additionOfLikes(data) {

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

    trierOpenClose() {  
        const option = document.querySelectorAll(".option")

        let classes = trier.classList

        trier.onclick = function () {
            let result = classes.toggle("open")
            if(result) {
                arrow.classList.add("rotate")
                option[0].classList.add("border")
                option[1].classList.add("border")
                option[2].classList.remove("border")
            } else {
                arrow.classList.remove("rotate")
                option[0].classList.remove("border")
                option[1].classList.remove("border")
                option[2].classList.remove("border")
                
            }
        }
    }

    sortMedias(data) {

        popularite.addEventListener("click", function(){
            const photographe = new Photographe(data)
            photographe.sortByLikes(data)
            photographe.setMedia(data)
            trier.prepend(popularite)
            photographe.trierOpenClose()
            
            const carrousel = new Carrousel()
            const arrayMedia = photographe.medias
            carrousel.display(arrayMedia)
        })

        date.addEventListener("click", function(){
            const photographe = new Photographe(data)
            photographe.sortByDate(data)
            photographe.setMedia(data)
            trier.prepend(date)
            photographe.trierOpenClose()

            const carrousel = new Carrousel()
            const arrayMedia = photographe.medias
            carrousel.display(arrayMedia)
        })

        titre.addEventListener("click", function(){
            const photographe = new Photographe(data)
            photographe.sortByTitre(data)
            photographe.setMedia(data)
            trier.prepend(titre)
            photographe.trierOpenClose()

            const carrousel = new Carrousel()
            const arrayMedia = photographe.medias
            carrousel.display(arrayMedia)
        })  
    }
}


