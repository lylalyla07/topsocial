export class RequestList {
  constructor(info) {
    this.info = info;
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('request-list');
    this.dom.innerHTML = `
      <h2>Requests</h2>
    `
    this.info.forEach(item => {
      this.dom.appendChild(new Request(item.src, item.name, item.mutualFriendNum).build());
    });
    return this.dom;
  }
}

class Request {
  constructor(src = '', name = '', mutualFriendNum = 0) {
    this.src = src;
    this.name = name;
    this.mutualFriendNum = mutualFriendNum;
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('request');
    this.dom.innerHTML = `
      <div class="profile">
        <div class="profile-photo">
        <img alt="profile photo" src="${this.src}">
        </div>
        <div class="profile-description">
          <h2>${this.name}</h2>
          <p>${this.mutualFriendNum} Mutual Friends</p>
        </div>
      </div>
      <div class="request-btn-group">
        <button class="btn btn-primary">Accept</button>
        <button class="btn btn-cancel">Decline</button>
      </div>
    `
    return this.dom;
  }
}