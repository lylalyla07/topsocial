export class Sidebar {
  constructor(menuItemList = []) {
    this.menuItemList = menuItemList;
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('sidebar');
    this.menuItemList.forEach(menuItem => {
      this.dom.appendChild(new Menu(menuItem.name, menuItem.icon_class_list).build());
    });
    return this.dom;
  }
}

class Menu {
  constructor(name = '', icon_class_list = []) {
    this.name = name;
    this.icon_class_list = icon_class_list;
  }

  build = () => {
    this.item = document.createElement('a');
    this.item.classList.add('menu-item');
    this.item.innerHTML = `
      <span>
        <i class="${this.icon_class_list.join(' ')}"></i>
      </span>
      <h2>${this.name}</h2>
    `
    return this.item;
  }
}

