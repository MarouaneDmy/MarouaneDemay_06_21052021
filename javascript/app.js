const bground = document.querySelector(".photographes");
const navTag = document.querySelector(".tagList");
let tagList = [];

function strUcFirst(a) {
    return (a+'').charAt(0).toUpperCase()+a.substr(1);
}

fetch("./javascript/json/data.json")
    .then(res => res.json())
    .then(data => {
        const photographes = data.photographers;
        let i = 0;
        for (const photographe of photographes) {
            let myArticle = document.createElement('article');
            let myLink = document.createElement('a')
            let myImg = document.createElement('img');
            let myH2 = document.createElement('h2');
            let myH3 = document.createElement('h3');
            let myPara1 = document.createElement('p');
            let myPara2 = document.createElement('p');
            let myPara3 = document.createElement('p');
            let myTags;

            const tags = data.photographers[i].tags;
            let e = 0;
            for (const tag of tags) {
                myTags = document.createElement('span');
                myTags.textContent = "#" + data.photographers[i].tags[e];
                tagList.push(data.photographers[i].tags[e]);
                myPara3.appendChild(myTags);
                myTags.classList.add("tags");
                e += 1
            }

            myPara2.classList.add("price");

            myLink.href = "./html/photographer-page.html";
            myImg.src = "images/Photographers/" + data.photographers[i].portrait;
            myH2.textContent = data.photographers[i].name;
            myH3.textContent = data.photographers[i].city + ", " + data.photographers[i].country;
            myPara1.textContent = data.photographers[i].tagline;
            myPara2.textContent = data.photographers[i].price + "€/jour";

            bground.appendChild(myArticle);
            myArticle.appendChild(myLink);
            myLink.appendChild(myImg);
            myLink.appendChild(myH2);
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            i += 1
        }       
        let myPara1 = document.createElement('p');
        let myTags;

        const filterTagList = [...new Set(tagList)];
        let e = 0;
        for (const tag of filterTagList) {
            myTags = document.createElement('span');
            myTags.textContent = "#" + strUcFirst(filterTagList[e]);
            myPara1.appendChild(myTags);
            myTags.classList.add("tags");
            e += 1
        }

        navTag.appendChild(myPara1);

        
        console.log(filterTagList);
    }
)

