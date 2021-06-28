export default class DataManager {
    async getData() {
        let response = await fetch("../javascript/json/data.json")
        let data = await response.json()
        return data
    }
}