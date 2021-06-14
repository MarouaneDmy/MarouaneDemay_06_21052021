// Fais apparaître l'image et autres paramètres de chaque photographe
function displayPhotographer(data) {
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