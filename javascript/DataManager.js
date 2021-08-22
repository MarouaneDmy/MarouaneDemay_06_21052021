export default class DataManager {
    async getData(chemin) {
        let response = await fetch(chemin)
        let data = await response.json()   
        return data
    }


    // Permet de récuper le tag dans l'URL
    getPhotographerTag() {
        try {
            let url_string = (window.location.href).toLowerCase()
            let url = new URL(url_string)
            let tag = url.searchParams.get("tag")
            return tag
        } catch (err) {
            console.log("issues with Parsing URL Parameter's - " + err)
        }
    }

    // Permet de récuper le tag dans l'ID
    getPhotographerId() { 
        try {
            let url_string = (window.location.href).toLowerCase()
            let url = new URL(url_string)
            let id = url.searchParams.get("id")
            return id
        } catch (err) {
            console.log("issues with Parsing URL Parameter's - " + err)
        }
    }
}