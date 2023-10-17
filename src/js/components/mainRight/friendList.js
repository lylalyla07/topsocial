export class FriendList {
  constructor(info) {
    this.info = info;
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('friend-list');
    this.info.forEach(item => {
      this.dom.appendChild(new Friend(item.src, item.name, item.msg).build());
    });
    return this.dom;
  }
}

class Friend {
  constructor(src, name, msg) {
    this.src = src;
    this.name = name;
    this.msg = msg;
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('profile');
    this.dom.innerHTML = `
      <div class="profile-photo">
        <img alt="profile photo" src="${this.src}">
      </div>
      <div class="profile-description">
        <h2>${this.name}</h2>
        <p>${this.msg}</p>
      </div>
    `
    return this.dom;
  }
}