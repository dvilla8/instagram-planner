import Media from "./media.class";
import MediaManager from "./mediaManager.class";
import User from "../user/user.class";

export default class MediaAlbum extends Media implements IMediaAlbum {
    public list: (IMediaImage | IMediaVideo)[] = []
    public listIndex: number = 0

    constructor(
        raw: IRawMedia,
        user: User
    ) {
        super(raw, user)

        this.setMediaType('album')

        // shortened album imports may be an array of strings
        // so this will convert to a regular object
        if (Array.isArray(raw)) {
            // @ts-ignore
            raw = { list: raw }
        }

        this.parseMediaAlbum(raw)
    }

    private parseMediaAlbum(raw: IRawMedia) {
        const mediaAlbumList: (IMediaImage | IMediaVideo)[] = []

        if (raw.list && Array.isArray(raw.list)) {
            for (let rawAlbumMedia of raw.list) {
                mediaAlbumList.push(
                    MediaManager.newMedia(rawAlbumMedia, this.user)
                )
            }

            this.list = mediaAlbumList
        }
    }

    public async addToAlbum(file: File) {
        const newAlbumMedia = MediaManager.newMedia({ file }, this.user)

        this.list?.splice(this.listIndex + 1, 0, newAlbumMedia)
        this.slideToNextListItem()
        this.refresh()

        await this.save()
    }

    public async removeFromAlbum() {
        const mediaIndexToRemove = this.listIndex

        this.list?.splice(mediaIndexToRemove, 1)
        this.slideToPrevListItem()
        this.refresh()

        await this.save()
    }

    public setListIndex(index: number) {
        this.listIndex = index
    }

    public slideToPrevListItem() {
        this.listIndex--

        if (this.listIndex < 0) {
            this.listIndex = this.list.length - 1
        }
    }

    public slideToNextListItem() {
        this.listIndex++

        if (this.listIndex === this.list.length) {
            this.listIndex = 0
        }
    }

    public async export(): Promise<IMediaAlbumExport> {
        let exportedList = []

        if (this.list) {
            for await (const media of this.list) {
                exportedList.push({
                    file: (await media.file?.blob)
                })
            }
        }

        return {
            type: this.type,
            list: exportedList
        }
    }
}