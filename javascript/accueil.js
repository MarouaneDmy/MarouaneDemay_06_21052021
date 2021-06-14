// DOM Elements
const bground = document.querySelector(".photographes")
const navTag = document.querySelector(".tagList")
let tagList = []

// Transforme la première lettre en majuscule
function strUcFirst(a) {
    return (a+'').charAt(0).toUpperCase()+a.substr(1)
}

// Prends les informations du fichier data.json
async function getData() {
    let response = await fetch("./javascript/json/data.json")
    let data = await response.json()
    return data
}

// Fais apparaître l'image et autres paramètres de chaque photographe
function displayPhotographers(data) {
    for (const photographe of data.photographers) {
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

// Supprime les doublons de la liste et la fait apparaître
function filterTagList() {
    let myPara1 = document.createElement('p')
    let myTags

    const filterTagList = [...new Set(tagList)]

    let e = 0
    for (const tag of filterTagList) {
        myTags = document.createElement('span')
        myTags.textContent = "#" + strUcFirst(filterTagList[e])
        myPara1.appendChild(myTags)
        myTags.classList.add("tags")
        e += 1
    }
    navTag.appendChild(myPara1)
}

async function pageAccueil() {
    
    const data = await getData()

    displayPhotographers(data)

    filterTagList()     
    
}

function getIdPhotographer() { 

    window.onload = function() {
        try {
            let url_string = (window.location.href).toLowerCase()
            let url = new URL(url_string)
            let id = url.searchParams.get("id")
            console.log(id)
        } catch (err) {
            console.log("issues with Parsing URL Parameter's - " + err)
        }
    } 
} 

export { pageAccueil, getIdPhotographer }