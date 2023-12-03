import User from "../user/user.class";
import InstagramUserProfile from "./instagramUserProfile.class";
import InstagramUserMedia from "./instagramUserMedia.class";

export default class InstagramUser extends User implements IInstagramUser {
    public readonly platform: IPlatforms = 'instagram'

    constructor(
        raw: IRawUser,
        origin: string,
    ) {
        super(raw, origin)

        /*
        this.structure.user = {
            //profile: new InstagramUserProfile(this),
            //media: new InstagramUserMedia(this)
        }
         */

        this.initialize()
    }

    public parseUserProfile() {
        this.profile = new InstagramUserProfile(this)
    }

    public parseUserMedia() {
        this.media = new InstagramUserMedia(this);
    }
}