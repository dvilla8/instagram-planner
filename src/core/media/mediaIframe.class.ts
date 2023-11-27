import Media from "./media.class";
import MediaImage from "./mediaImage.class";
import User from "../user/user.class";

export default class MediaIframe extends Media {
    constructor(
        rawMedia: IRawMedia,
        user: User
    ) {
        super(rawMedia, user)

        this.setMediaType('iframe')
        this.parseMediaIframe(rawMedia)
    }

    private parseMediaIframe(rawMedia: IRawMedia) {
        const mediaData: IMediaData = {}

        // set max quality to youtube embed videos
        if (rawMedia.href) {
            if (rawMedia.href.startsWith('https://youtube.com/embed/')) {
                rawMedia.href = rawMedia.href + '?autoplay=1&version=3&vq=hd1080'
            }

            mediaData.href = rawMedia.href
        }

        if (rawMedia.reel) {
            mediaData.reel = rawMedia.reel
        }

        if (rawMedia.cover) {
            mediaData.cover = new MediaImage(rawMedia.cover, this.user)
        }

        return this.setMediaData(mediaData)
    }
}