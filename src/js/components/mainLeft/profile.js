const img_url = null;
const name = null;
const info = null;

function create_profile(img_url, name, info) {
  const profile = document.createElement('a')
  profile.classList.add('profile')

  profile.innerHTML = `
    <div class="profile-photo">
      <img alt="profile photo" src="${img_url}">
    </div>
    <div class="profile-description">
      <h2>${name}</h2>
      <p>${info}</p>
    </div>
  `
  return profile
}

export {
  create_profile
}


export class Profile {
  static list = []
  constructor(img_url, name, info) {
    this.img_url = img_url
    this.name = name
    this.info = info
    // this.build()
  }

  build = () => {
    const profile = document.createElement('a')
    profile.classList.add('profile')

    profile.innerHTML = `
      <div class="profile-photo">
        <img alt="profile photo" src="${this.img_url}">
      </div>
      <div class="profile-description">
        <h2>${this.name}</h2>
        <p>${this.info}</p>
      </div>
    `
    Profile.list.push(profile)
    this.dom = profile
    return profile
  }
}