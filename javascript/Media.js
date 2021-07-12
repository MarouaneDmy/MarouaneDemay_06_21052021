export default class Media {
    constructor (data) {
        this.data = data
        this.id = data.id
        this.photographerId = data.id
        this.title = data.title
        this.tags = data.tags
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
    }
}
