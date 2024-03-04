# Instagram Planner

> An elegant open-source planner for your Instagram profile

## About

**dxlliv/planner** lets you preview what your profile grid will look like.  
Plan the grid with no hassle and build your definitive Instagram profile.

**[Demo](https://dxlliv.github.io/planner/) · [Documentation](https://dxlliv.github.io/planner/docs/) · [Support](https://patreon.com/dxlliv)**

## Features
- **Organize your grid**  
  Drag and drop your media or configure it in the old fashioned way.


- **A wide range of media**  
  It supports both local and remote images, videos, albums and iframes.


- **Plan your everything**  
  You will be able to plan posts, reels, stories and highlights in a while.


- **Limitless changes**  
  Edit your media as much as you want and build your definitive profile.


- **Backup your account**  
  It can serve as a planner but also as a backup for all of your content.


- **High quality media**  
  Avoid compression and deliver your work without annoying limits.


- **Host it anywhere**  
  Take ownership of your data, put your files in a repository and deploy.


- **Infinite possibilities**  
  Make your profile memorable and more indexable by search engines.


## Getting started

Make sure you have Node.js and NPM installed.  
Clone the repository and move to the project directory:

```bash
git clone https://github.com/dxlliv/planner.git && cd planner
```

Install dependencies and run the project with `yarn` or `npm`:

```bash
yarn install && yarn dev

# or use npm
npm install && npm run dev
```

### Configuration

Make changes to your profile by editing `src/public/user/instagram/{username}`.  
Update `planner.config.ts` accordingly. Read the [documentation](https://dxlliv.github.io/planner/docs/) for further information.

## Plan interactively

You might also like to directly edit your profile using a really simple UI.  
In that case, just upload the media and rearrange your grid as desired.

Export your changes in zip format and overwrite your profile configuration.  
I may release a Node.js helper in the future, to speed up this process.

## Roadmap

- [ ] Profile viewer
  - [x] Posts
    - [x] Image support
    - [x] Video support
    - [x] Album support
    - [x] Iframe support
    - [x] Caption
    - [x] Date
    - [ ] Location
  - [x] Reels
  - [ ] Stories
  - [ ] Highlights
- [x] Profile creation
  - [x] Create new profile
  - [ ] Import from .zip
- [ ] Profile editor
  - [x] Basic
    - [x] Add media
    - [x] Remove media
    - [x] Sort media
    - [x] Add cover
    - [x] Replace cover
    - [x] Remove cover
    - [x] Convert to album
    - [x] Convert to iframe
    - [x] Clone to reel
  - [ ] Advanced
  - [x] Storage
- [x] Profile export
- [ ] Calendar view
- [x] Implement Storybook
- [x] Implement i18n

## Deluxe Planner

If you're interested in featuring a self-hosted profile on your website to showcase your best media in a memorable way, or you if you're looking for a personalized planner with extra features to enhance your creativity and seamlessy publish your work on Instagram, request a tailor made planner today.

**[Request a Deluxe Planner](https://dxlliv.dev)**