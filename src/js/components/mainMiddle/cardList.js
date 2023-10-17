export class CardList {
  #card = null
  constructor(cards = []) {
    this.#card = cards
  }

  build = () => {
    const dom = document.createElement('div')
    dom.classList.add('card')
    this.#card.forEach(card => {
      dom.appendChild(new Card(card).build())
    })
    return dom
  }
}

class Card {
  #card = null
  constructor(card = {}) {
    this.#card = card
  }

  build = () => {
    const dom = document.createElement('div')
    dom.classList.add('info')
    dom.appendChild(new InfoProfile(this.#card.profile).build())
    dom.appendChild(new InfoPicture(this.#card.picture).build())
    dom.appendChild(new InfoControl(this.#card.control).build())
    dom.appendChild(new InfoComment(this.#card.comment).build())
    return dom
  }
}

class InfoProfile {
  #info = null
  constructor(info = {}) {
    this.#info = info
  }

  build = () => {
    const dom = document.createElement('div')
    dom.classList.add('info-profile')
    dom.innerHTML = `
    <div class="profile">
      <div class="profile-photo">
        <img alt="profile photo" src="${this.#info.src}">
      </div>
      <div class="profile-description">
        <h2>${this.#info.name}</h2>
        <p>${this.#info.position}, ${this.#info.time}</p>
      </div>
    </div>
    <i class="uil uil-ellipsis-h"></i>
    `
    return dom
  }
}

class InfoPicture {
  #info = null
  constructor(info = {}) {
    this.#info = info
  }

  build = () => {
    const dom = document.createElement('div')
    dom.classList.add('info-picture')
    dom.innerHTML = `
      <img width="100%" src="${this.#info.img_src}">
    `
    return dom
  }
}


class InfoControl {
  #info = null
  constructor(info = {}) {
    this.#info = info
  }

  build = () => {
    const dom = document.createElement('div')
    dom.classList.add('info-control')
    dom.innerHTML = `
      <div class="main-control">
        <i class="uil uil-heart control_heart"></i>
        <i class="uil uil-comment-dots"></i>
        <i class="uil uil-share-alt"></i>
      </div>
      <i class="uil uil-bookmark"></i>
    `
    return dom
  }
}

class InfoComment {
  #info = null
  constructor(info = {}) {
    this.#info = info
  }

  build = () => {
    const dom = document.createElement('div')
    dom.classList.add('info-comment')
    this.#createProfileList(dom)
    this.#createCommentInfo(dom)
    this.#createViewBtn(dom)
    return dom
  }

  #createProfileList = (father) => {
    const dom = document.createElement('div')
    dom.classList.add("profile-photo-list")
    // this.#createPhotoList().forEach(img => {
    //   dom.appendChild(img)
    // })
    this.#createPhotoList(dom)
    this.#createLikeInfo(dom)
    // dom.appendChild(this.#createLikeInfo())
    father?.appendChild(dom)
    return dom
  }

  #createPhotoList = (father) => {
    const domList = []
    this.#info.img_src_list.forEach(url => {
      const img = document.createElement('img')
      img.classList.add('profile-photo')
      img.src = url
      father?.appendChild(img)
    })
    return domList
  }

  #createLikeInfo = (father) => {
    const dom = document.createElement('span')
    dom.classList.add('like-info')
    dom.innerHTML = `
      Liked by <strong> ${this.#info.first_people_name}</strong> and <strong> ${this.#info.like_peoples_number}</strong> others
    `
    father?.appendChild(dom)
    return dom
  }

  #createCommentInfo = (father) => {
    const dom = document.createElement('span')
    dom.classList.add('comment-info')
    dom.textContent = this.#info.comment_info
    father?.appendChild(dom)
    return dom
  }

  #createViewBtn = (father) => {
    const dom = document.createElement('span')
    dom.classList.add('view-btn')
    dom.textContent = `View all ${this.#info.view_number} comments`
    father?.appendChild(dom)
    return dom
  }
}