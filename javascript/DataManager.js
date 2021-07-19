export default class DataManager {
    async getData() {
        let response = await fetch("../../javascript/json/data.json")
        let data = await response.json()   
        return data
    }

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