interface IConfig {
  profiles: IConfigUsers
}

type IConfigUsers = IConfigUser[]

interface IConfigUser {
  profile: {
    name: string
    username: string
    website?: string
    biography?: string
    avatar?: string
    followers_count: number
    follows_count: number
    media: {
      posts: IConfigUserProfileMedia[]
      reels: IConfigUserProfileMedia[]
      stories: IConfigUserProfileMedia[]
      highlights: IConfigUserProfileMedia[]
    }
  }
  options: any
}

type IConfigUserProfileMedia = string
    | IConfigUserProfileMediaImage
    | IConfigUserProfileMediaVideo
    | IConfigUserProfileMediaIframe
    | IConfigUserProfileMediaAlbum
type IConfigUserProfileMediaAlbumList = (IConfigUserProfileMediaImage|IConfigUserProfileMediaVideo|IConfigUserProfileMediaIframe)[]

type IConfigUserProfileMediaImage = {
  type: "image"
  file: string
}

type IConfigUserProfileMediaVideo = {
  type: "video"
  file: string
}

type IConfigUserProfileMediaIframe = {
  type: "iframe"
  href: string
}

type IConfigUserProfileMediaAlbum = {
  type: "album"
  list: IConfigUserProfileMediaAlbumList
}


// parsed config

type IUsers = { [username: string]: IUser }

interface IUser {
  profile: IProfile
  options: IUserOptions
}

interface IProfile {
  name: string
  username: string
  website: null | {
    href: string
    label: string
  }
  biography?: string
  avatar: IProfileMediaFile
  followers_count: number
  follows_count: number
  posts_count: number
  media: {
    posts: IProfileMedia[]
    reels: IProfileMediaVideo[]
    stories: IProfileMediaVideo[]
    highlights: IProfileMediaAlbum[]
  }
}

interface IUserOptions {

}


type IProfileMedia = IProfileMediaImage
    | IProfileMediaVideo
    | IProfileMediaIframe
    | IProfileMediaAlbum
type IProfileMediaAlbumList = (IProfileMediaImage|IProfileMediaVideo|IProfileMediaIframe)[]

type IProfileMediaImage = {
  type: "image"
  file: IProfileMediaFile
}

type IProfileMediaVideo = {
  type: "video"
  file: IProfileMediaFile
  reel?: boolean
  cover?: string | number
}

type IProfileMediaIframe = {
  type: "iframe"
  href: string
}

type IProfileMediaAlbum = {
  type: "album"
  list: IProfileMediaAlbumList
}

interface IProfileMediaFile {
  filename: string
  path: string
}
