import Video from "./Video.js"
import Image from "./Image.js"

export default class MediaFactory {
    constructor (data) {
        this.data = data
    }

    static createMedia(type, data) {

        if (type == "image") {  
            return new Image(data)
        }

        if (type == "video") {
            return new Video(data)
        } 
    }
}


