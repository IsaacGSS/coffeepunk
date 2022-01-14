class MobileNav {
  constructor () {
    this.mobileMenu = document.querySelector(mobilemenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks)
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("Click", () => console.log("certo"));
  }

  init() {
    if(this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNav = new MobileNav(
  ".mobile-menu",
  ".nav_list",
  "nav-list li",
);

MobileNav.init();