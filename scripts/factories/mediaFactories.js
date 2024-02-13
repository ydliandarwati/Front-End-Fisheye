import { Image, Video } from "../models/media.js";

export class MediasFactory {
	constructor(data) {
		if (data.image) {
			return new Image(data);
		} else if (data.video) {
			return new Video(data);
		} else {
			throw "Unknown data type";
		}
	}
}