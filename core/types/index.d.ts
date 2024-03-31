// @ts-expect-error
declare function useNuxtApp(): NuxtApp;

type IUserPlatform = "instagram"
type IUserOrigin = "local" | "remote" | "storage"

interface IRawConfig {
  users: string[]
  platform: {
    default: IUserPlatform
  }
  features: {
    editor: boolean
  }
  locale: string
}

interface IRawUser {
  id?: string
  path: string
  profile: IRawUserProfile
  media: IRawUserMedia
  platform: IUserPlatform
  options: any

  origin: IUserOrigin
  basePath: string
}

interface IRawUserProfile {
  name: string
  username: string
  website?: string
  biography?: string
  avatar: string | File
  verified?: boolean
  followers_count: number
  follows_count: number
}

interface IRawUserMedia {
  posts: string | IRawMedia[]
  reels: string | IRawMedia[]
  stories: string | IRawMedia[]
  highlights: string | IRawMedia[]
}

type IRawAvatar = File | string

interface IRawMedia {
  type?: IMediaType
  collection?: IMediaCollection
  name?: string
  file?: File
  reel?: boolean
  cover?: number | string | IRawMedia
  list?: string[] | IRawMedia[]
  href?: string

  title?: string
  slug?: string
  caption?: string
  date?: string
}

interface IRawMediaImage extends IRawMedia {
  reel?: undefined
}

interface IRawMediaVideo extends IRawMedia {
  cover?: IRawMedia | number
  reel?: boolean
}

interface IRawMediaAlbum extends IRawMedia {
  list: IRawMedia[]
}

interface IRawMediaIframe extends IRawMedia {
  href: string
  cover?: IRawMedia
  reel?: boolean
}

interface ITempUserReference {
  username: string
  platform: IUserPlatform
}

// parsed config

type IUsers = { [username: string]: IUser }

interface IUser {
  platform: IUserPlatform
  origin: IUserOrigin
  id: string

  raw: IRawUser

  options: IUserOptions
  profile: IUserProfile
  media: IUserMedia
  storage: any

  status: IUserStatus

  // @ts-ignore
  get route(): RouteRecord
  get hasLocalChanges(): boolean
  get hasUnsavedChanges(): boolean
  get isRemovable(): boolean

  init(): void
  loadUserStorage(): void
  loadUserProfile(): Promise<void>
  loadUserMedia(): void
  setUnsavedChanges(value: boolean): void
  setLocalChanges(value: boolean): void
  setId(id: string): void

  save(): Promise<void>
  remove(): Promise<void>
  reset(): Promise<void>
  export(): Promise<any>
}

interface IInstagramUser extends IUser {
  platform: IUserPlatform
  id: string

  profile: IInstagramUserProfile
  media: IInstagramUserMedia
}

interface IUserStatus {
  unsavedChanges: boolean
  localChanges: boolean
}

interface IUserExported {
  id: string
  profile: any
  media: IUserExportedMedia
}

interface IUserExportedMedia {
  [collection: string]: any
}

interface IUserProfile {
  username: string
  name: string
  website: string
  verified?: boolean
  biography?: string
  avatar: UserAvatar | undefined
  followers_count: number
  follows_count: number
  posts_count: number

  setUsername(username: string): void
  updateUsername(username: string): Promise<void>

  setName(name: string): void
  updateName(name: string): Promise<void>

  setBiography(biography: string): void
  updateBiography(biography: string): Promise<void>

  setVerified(verified: boolean): void
  setPostsCount(count: number): void
  setFollowersCount(count: number): void
  setFollowsCount(count: number): void
  setWebsite(website: any): void

  setAvatar(avatar: string | File): Promise<void>
  updateAvatar(avatar: File): Promise<void>

  import(): void
  export(): Promise<IRawUserProfile>
  update(data: any): Promise<void>
}

interface IInstagramUserProfile extends IUserProfile {
  user: IInstagramUser
  structure: IPlatformStructureUserProfile

  get public_profile(): string
  export(): Promise<IRawUserProfile>
}

interface UserAvatar {
  get isSet(): boolean
  export(): Promise<File>
}

type IUserProfileWebsite = null | {
  href: string
  label: string
}

type IUserMediaCollections = {
  [collectionName: string]: IMedia[]
}

interface IUserMedia {
  collections: IUserMediaCollections

  get structureCollectionKeys(): IMediaCollection[]
  get collectionKeys(): string[]

  hasCollection(collectionName: string): boolean
  reset(): void
  fetch(from: IMediaFrom): void
  addMedia(
    rawMedia: string | IRawMedia,
    collection: IMediaCollection,
    options: {
      addMethod: IMediaAddMethod,
      from: IMediaFrom
    }
  ): void
  export(): Promise<any>
}

interface IInstagramUserMedia extends IUserMedia {
  structure: {
    collections: {
      [collectionName: string]: any
    }
  }
}

interface IUserOptions {}

interface IMedia {
  user: any
  raw: string | File | IRawMedia
  id: string
  route: string
  title: string
  slug: string
  type: IMediaType
  from: IMediaFrom
  collection: IMediaCollection
  cover?: IMediaImage
  list?: any

  collectionSingularized: string

  setUniqueId(): void

  get isEditing(): boolean
  setEditing(toggle: boolean): void

  setDetailView(toggle: boolean): void
  setMediaType(mediaType: IMediaType): void
  fetchMediaFileFromString(fileName: string): Promise<IMediaFile>
  fetchMediaFileFromBlob(fileBlob: File): Promise<IMediaFile>

  caption: string
  setCaption(value: string) :void

  date: string
  setDate(value: string) :void

  refresh(): void

  remove(): Promise<number>

  fetch(): void

  export(): Promise<any>
  exportConfig(): any
  exportFiles(): Promise<any>
}

interface IMediaImage extends IMedia {
  file: Promise<IMediaFile>

  setMediaImage(blob: File): Promise<void>

  convertToAlbum(): Promise<void>
  convertToIframe(href: string): Promise<void>
}

interface IMediaVideo extends IMedia {
  file: Promise<IMediaFile>
  cover: undefined | IMediaImage
  coverTime: number

  setCover(file: File): Promise<void>
  setCoverTime(value: number): Promise<void>
  removeCover(): Promise<void>

  convertToAlbum(): Promise<void>

  reel: boolean
  get isReel(): boolean
  cloneToReel(): Promise<void>
}

interface IMediaAlbum extends IMedia {
  list: (IMediaImage | IMediaVideo)[]
  listIndex: number

  get currentIndex(): number
  get itemsCount(): number

  addToAlbum(file: File): Promise<void>
  setMediaAlbumImage(file: File): Promise<void>
  removeFromAlbum(): Promise<void>

  setListIndex(index: number): void
  slideToPrevListItem(): void
  slideToNextListItem(): void
}

interface IMediaIframe extends IMedia {
  href: string
  cover: undefined | IMediaImage

  reel?: boolean
  get isReel(): boolean
  cloneToReel(): Promise<void>
}

type IMediaType = "image" | "video" | "album" | "iframe"
type IMediaFrom = "config" | "client"
type IMediaCollection = "posts" | "reels"
type IMediaAddMethod = "push" | "unshift"

interface IMediaFile {
  name?: string
  path?: string
  blob?: Promise<File>
}

interface IMediaCoverExport {
  type: string
  file: File
}

interface IMediaExportCommonConfig {
  type: string
  caption: string
  /*
  file?: File
  reel?: boolean
  href?: string
  cover?: number | {
    type: string
    file: File
  }
  list?: {
    file?: File
  }[]
   */
}

interface IMediaImageExportConfig extends IMediaExportCommonConfig {

}

interface IMediaImageExportMedia {
  file: File
}

interface IMediaVideoExportConfig extends IMediaExportCommonConfig {
  reel: boolean
}

interface IMediaVideoExportMedia {
  file: File
  cover: undefined | number | IMediaCoverExport
}

interface IMediaAlbumExportConfig extends IMediaExportCommonConfig {

}

interface IMediaAlbumExportMedia extends IMediaExportCommonConfig {
  list?: {
    file?: File
  }[]
}

interface IMediaIframeExportConfig extends IMediaExportCommonConfig {
  reel: boolean
  href: string
}

interface IMediaIframeExportMedia {
  cover: IMediaCoverExport
}

interface IUserStorage {
  init(): Promise<void>
  isContentAvailable(): Promise<boolean>
  restore(): Promise<void>
  save(): Promise<void>
  remove(): Promise<void>
}

interface IPlatform {
  user: IPlatformStructureUser
}

interface IPlatformStructureUser {
  profile: IPlatformStructureUserProfile
  collections: {
    [fieldKey: string]: IPlatformStructureCollectionOptions
  }
}

interface IPlatformStructureUserProfile {
  fields: {
    [fieldKey: string]: {
      type: string
      validation?: {
        required?: boolean
        minLength?: number
        maxLength?: number
      }
      methods?: {
        set: string
      }
    }
  }
}

interface IPlatformStructureCollectionOptions {}

interface IDatabase extends DBSchema {}