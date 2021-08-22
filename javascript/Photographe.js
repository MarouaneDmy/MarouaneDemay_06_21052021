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
const triLink = document.querySelectorAll(".triLink")
const popularite = document.querySelector(".popularite")
const date = document.querySelector(".date")
const titre = document.querySelector(".titre")
const arrow = document.getElementById("arrow")
let tagList = []

export default class Photographe {
    constructor(data) {
        this.data = data
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

    // Affichage du Photographe sur sa page
    display() {
        let myArticle = document.createElement('article')
        let myImg = document.createElement('img')
        let myName = document.createElement('p')
        let myCity = document.createElement('p')
        let myTagline = document.createElement('p')
        let myPrice = document.createElement('p')
        let myPara3 = document.createElement('p')
        let myTagLink
        let myTags
    
        // Boucle qui permet d'afficher tous les tags du photographe
        for (const [i, tag] of this.tags.entries()) {
            myTagLink = document.createElement('a')
            myTags = document.createElement('span')
            myTagLink.href = "../index.html?tag=" + myTagLink.getAttribute("name")
            myTags.textContent = "#" + this.tags[i]
            tagList.push(this.tags[i])
            myPara3.appendChild(myTagLink)
            myTagLink.appendChild(myTags)
            myTagLink.classList.add("tagLink")
            myTagLink.classList.add("sortTag")
            myTags.classList.add("tags")
            myTags.classList.add("sortTag")
            myTagLink.setAttribute("name", tag)
            myTags.setAttribute("name", tag)
        }
    
        myImg.src = "../images/Photographers/" + this.portrait
        myImg.alt = "Photo de profil de " + this.name
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

    // Affiche tous les photographes sur la page d'accueil
    displayPhotographers(data) {
        
        // Vide la balise pour afficher les photographes voulus 
        if (bground != "") {
            bground.innerHTML = "";
        } 

        // Boucle qui permet d'afficher tous les photographes de la liste
        for (const photographe of data) {
            let myArticle = document.createElement('article')
            let myLink = document.createElement('a')
            let myImg = document.createElement('img')
            let myH2 = document.createElement('h2')
            let myH3 = document.createElement('h3')
            let myPara1 = document.createElement('p')
            let myPara2 = document.createElement('p')
            let myPara3 = document.createElement('p')
            let myTagLink
            let myTags
    
            // Boucle qui permet d'afficher tous les tags du photographe
            for (const [i, tag] of photographe.tags.entries()) {
                myTagLink = document.createElement('a')
                myTags = document.createElement('span')
                myTags.textContent = "#" + photographe.tags[i]
                tagList.push(photographe.tags[i])
                myPara3.appendChild(myTagLink)
                myTagLink.appendChild(myTags)
                myTags.classList.add("tags")
                myTags.classList.add("sortTag")
                myTagLink.classList.add("tagLink")
                myTagLink.href = "./index.html?tag=" + tag
                myTags.setAttribute("aria-labelledby", tag)
            }
    
            myArticle.classList.add("detailsPhotographes")
            myLink.classList.add("photographerLink")
            myPara2.classList.add("price")
    
            myLink.href = "./html/photographer-page.html?id=" + photographe.id
            myImg.src = "images/Photographers/" + photographe.portrait
            myImg.alt = "Photo de profil de " + photographe.name
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

    // Transforme la première lettre de la chaîne de caractère en majuscule
    strUcFirst(a) {
        return (a+'').charAt(0).toUpperCase()+a.substr(1)
    }

    // Filtre la liste des tags en supprimant ses doublons et l'affiche dans le header
    filterTagList() {
        let myPara1 = document.createElement('p')
        let myTags
        let myTagLink
    
        const filterTagList = [...new Set(tagList)]
    
        let e = 0

        // Affiche tous les tags de la tagList
        for (const tag of filterTagList) {
            myTagLink = document.createElement('a')
            myTags = document.createElement('span')
            myTags.textContent = "#" + this.strUcFirst(filterTagList[e])
            myPara1.appendChild(myTagLink)
            myTagLink.appendChild(myTags)
            myTagLink.classList.add("tagLink")
            myTagLink.href = "./index.html?tag=" + tag
            myTags.classList.add("tags")
            myTags.classList.add("sortTag")
            myTags.setAttribute("aria-labelledby", tag)
            e += 1
        }
        navTag.appendChild(myPara1)
    }

    // display du Carrousel lors du initMedia pour le changement du this.medias 
    setCarrousel(){
        const carrousel = new Carrousel()
        carrousel.display(this.medias)
    }

    // Affiche le media de liste media, une image ou une vidéo
    displayMedias() {
        if (photos != "") {
            photos.innerHTML = "";
        } 

        for (const [i, dataMedia] of this.medias.entries()) {
            dataMedia.display(i)
        }
    }

    // Donne le type image ou vidéo au média et l'envoie à mon this.medias
    setMedia(data) {
        if (photos != "") {
            photos.innerHTML = "";
        } 

        let type = ""

        for (const dataMedia of data) {

            if (dataMedia.image !== undefined) {
                type = "image"
            }
            
            if (dataMedia.image === undefined) {
                type = "video"
            } 
            
            const media = MediaFactory.createMedia(type, dataMedia)
            this.medias.push(media)
        }
    } 

    // Tri les photographes par tag 
    sortByTag(data, tag) {
        let photographerTags = document.querySelectorAll(".sortTag")

        for (const tag of photographerTags) {
 
            // Permet de trier par tag en appuyant sur "Entrée"
            window.addEventListener("keydown", function(event){
                let elemCourant = document.activeElement;

                if(elemCourant.classList.contains("tagLink") && event.key === "Enter") {
                    let photographerTag = elemCourant.getAttribute("name") 
                    document.location.href = "index.html?tag=" + elemCourant.setAttribute("name")
                    const foundPhotographerByTag = data.photographers.filter(photographers => photographers.tags.includes(photographerTag))
                    const photographe = new Photographe(foundPhotographerByTag)
                    photographe.displayPhotographers(foundPhotographerByTag)     
                }
            })
        }

        // Tri par le tag qu'il y a dans l'url
        if(tag !== null){
            const foundPhotographerByTag = data.photographers.filter(photographers => photographers.tags.includes(tag))
            this.displayPhotographers(foundPhotographerByTag)
        }
    }

    // Redirige vers la page d'accueil et tri par le tag cliqué
    tagRedirection() {
        let photographerTags = document.querySelectorAll(".sortTag")

        for (const tag of photographerTags) {
            tag.addEventListener("click", function(){   
                let photographerTag = tag.getAttribute("name") 
                tag.href = "../index.html?tag=" + photographerTag
            })
        }
    }

    // Tri par likes
    sortByLikes() {

        this.medias.sort(function(a, b) {
            return b.likes - a.likes
        })

    }

    // Tri par dates
    sortByDate() {

        this.medias.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        })
        
    } 

    // Tri par titre
    sortByTitre() {

        this.medias.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        })

    }
    
    // Ajoute un like lorsqu'on clique
    addLike() {
        const totalLikes = document.querySelector(".likes")
        let myLikes = document.querySelectorAll(".myLikes")
        
        for (const like of myLikes) {
            let i = 0
            like.addEventListener("click", function(){   
                let nombre = parseInt(like.textContent)
                let total = parseInt(totalLikes.textContent)       
                
                if(i == 0) {
                    nombre = nombre + 1
                    totalLikes.textContent = total + 1
                    i = i + 1
                } else {
                    nombre = nombre - 1
                    totalLikes.textContent = total - 1
                    i = i - 1
                }
                like.textContent = nombre
            })
        }
    }

    // Affiche la somme des likes 
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

    // Liste de tri qui s'ouvre et se ferme
    trierOpenClose() {  
        const option = document.querySelectorAll(".option")
        let classes = trier.classList

        trier.onclick = function () {
            let result = classes.toggle("open")
            if(result) {
                arrow.classList.add("rotate")
                triLink[0].href = "#"
                triLink[1].href = "#"
                triLink[2].href = "#"
                option[0].classList.add("border")
                option[1].classList.add("border")
            } else {
                arrow.classList.remove("rotate")
                triLink[0].removeAttribute("href")
                triLink[1].removeAttribute("href")
                triLink[2].removeAttribute("href")
                option[0].classList.remove("border")
                option[1].classList.remove("border")
                option[2].classList.remove("border")
            }
        }
    }

    // Initialise les medias pour qu'ils prennent en compte le changement de this.medias
    initMedia(){
        this.displayMedias()
        this.trierOpenClose()
        this.addLike()
        this.setCarrousel()
    }

    // Lance le tri par likes, met l'option de tri en premier et lance l'initMedia
    onClickTriPopularite() {
        this.sortByLikes()
        trier.prepend(popularite)
        this.initMedia()   
    }

    // Lance le tri par date, met l'option de tri en premier et lance l'initMedia
    onClickTriDate() {
        this.sortByDate()
        trier.prepend(date)
        this.initMedia()   
    }

    // Lance le tri par titre, met l'option de tri en premier et lance l'initMedia
    onClickTriTitre() {
        this.sortByTitre()
        trier.prepend(titre)
        this.initMedia()   
    }

    // Evènement onClickTri lancé par évènement click
    sortMedias() {

        popularite.addEventListener("click", this.onClickTriPopularite.bind(this))

        date.addEventListener("click", this.onClickTriDate.bind(this))

        titre.addEventListener("click", this.onClickTriTitre.bind(this))
        
    }
}


