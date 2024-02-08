// parent Media class with all properties except image.video
export class Media {
    constructor(data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.alt = data.alt;
    }
};

// child Image class which adds image to parent
export class Image extends Media {
    constructor(data) {
        super(data);
        this.image = data.image;
    }
};

// child video which adds video to parent
export class Video extends Media {
    constructor(data) {
        super(data);
        this.video = data.video;
    }
};