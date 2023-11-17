export function parseProfile(config: IConfigUser): IUser {
  const data: IUser = {
    profile: {},
  } as IUser;

  // set fields
  data.profile.name = config.profile.name;
  data.profile.username = config.profile.username;
  data.profile.verified = Boolean(config.profile.verified);

  data.profile.posts_count = 0;
  data.profile.followers_count = Number(config.profile.followers_count);
  data.profile.follows_count = Number(config.profile.follows_count);

  data.profile.website = !config.profile.website
    ? null
    : {
        href: config.profile.website,
        label: new URL(config.profile.website).hostname,
      };

  // parse fields biography
  if (config.profile.biography) {
    data.profile.biography = config.profile.biography?.replace(
      /(?:\r\n|\r|\n)/g,
      "<br>",
    );
  }

  // set parsed avatar
  data.profile.avatar = getProfileAvatar(config);

  // set empty media
  data.profile.media = {
    posts: [],
    stories: [],
    reels: [],
    highlights: [],
  };

  // check for media property
  if (Object.prototype.hasOwnProperty.call(config.profile, "media")) {
    // parse media posts
    if (config.profile.media.posts) {
      data.profile.media.posts = parseProfilePosts(config);
    }

    // parse media reels
    if (config.profile.media.reels) {
      data.profile.media.reels = parseProfileReels(config)
    }
  }

  return data;
}

function getFileExtension(filename: string) {
  return filename.split('.').pop()
}

function parseProfileMedia(
    config: IConfigUser,
    media: IConfigUserProfileMedia
) {
  let parsedMedia = null

  let mediaAlbum: IMediaAlbumList = []
  let mediaVideoCover = null

  switch (typeof media) {

    // is it a short import?
    case "string":

      switch(getFileExtension(media)) {

        case 'mp4':
          parsedMedia = {
            file: getProfileMediaVideo(config, media),
            type: "video",
            cover: 0
          }
          break;

        default:
          parsedMedia = {
            file: getProfileMediaImage(config, media),
            type: "image",
          }
          break;

      }

      break;

    // is it a regular import?
    case "object":

      switch (media.type) {

        case "image":
          parsedMedia = {
            file: getProfileMediaImage(config, media.name),
            type: "image",
          }
          break;

        case "album":
          if (media.list && Array.isArray(media.list)) {
            for (let albumMediaPost of media.list) {
              mediaAlbum.push(
                  parseProfileMedia(config, albumMediaPost)
              )
            }
          }

          parsedMedia = {
            list: mediaAlbum,
            type: "album",
          }
          break;

        case "video":
          // parse video cover
          if (media.cover) {
              switch(typeof media.cover) {
                case "string":
                  mediaVideoCover = {
                    file: getProfileMediaImage(config, media.cover),
                    type: "image",
                  }
                  break;
                case "number":
                  mediaVideoCover = media.cover
                  break;
              }
          }

          parsedMedia = {
            file: getProfileMediaVideo(config, media.name),
            type: "video",
            cover: mediaVideoCover
          }
          break;

        case "iframe":
          parsedMedia = {
            href: getProfileMediaIframe(config, media.href),
            type: "iframe",
          }
          break;

      }
      break;
  }

  return parsedMedia
}

function parseProfilePosts(config: IConfigUser) {
  const parsedPosts: any = [];

  for (let mediaPost of config.profile.media.posts) {
    parsedPosts.push(
        parseProfileMedia(config, mediaPost)
    )
  }

  return parsedPosts;
}

function parseProfileReels(config: IConfigUser) {
  const parsedReels: any = [];

  for (let mediaPost of config.profile.media.posts) {
    parsedReels.push(
        parseProfileMedia(config, mediaPost)
    )
  }

  for (let mediaReel of config.profile.media.reels) {
    parsedReels.push(
        parseProfileMedia(config, mediaReel)
    )
  }

  return parsedReels;
}

function getMediaPath(config: IConfigUser, filename: string) {
  if (filename.startsWith("http")) {
    return "";
  }

  return `users/${config.profile.username}/media/${filename}`;
}

export function getProfileAvatar(config: IConfigUser): IMediaFile {
  let avatarFilename = "avatar.jpg";
  let path = "";

  if (config.profile.avatar) {
    avatarFilename = config.profile.avatar;
  }

  if (avatarFilename.startsWith("http")) {
    path = avatarFilename;
  } else {
    path = `users/${config.profile.username}/${avatarFilename}`;
  }

  return {
    filename: avatarFilename,
    path,
  };
}

export function getProfileMediaImage(
  config: IConfigUser,
  filename: string,
): IMediaFile {
  return {
    filename,
    path: getMediaPath(config, filename),
  };
}

export function getProfileMediaIframe(
  config: IConfigUser,
  href: string,
): string {
  return href;
}

export function getProfileMediaVideo(
  config: IConfigUser,
  filename: string,
): IMediaFile {
  return {
    filename,
    path: getMediaPath(config, filename),
  };
}
