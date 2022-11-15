// 스크롤을 내리면 navbar 흐리게 만들기
const navbar = document.querySelector('#navbar');
document.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('blurred');
  } else {
    navbar.classList.remove('blurred');
  }
})

// 스크롤을 내리면 맨 위로 갈 수 있는 화살표 버튼 활성화시키기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    arrowUp.classList.add('visible')
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  document.body.scrollIntoView({ behavior:'smooth' });
})

const searchMark = document.querySelector('.fa-magnifying-glass');
const xMark = document.querySelector('.fa-xmark');
let menuItems = document.querySelectorAll('.menu__item');
const navbarMenu = document.querySelector('.navbar__menu');
const hiddenMenus = document.querySelectorAll('.menu__hidden');


searchMark.addEventListener('click', () => {
  menuItems.forEach((item) => {
    item.classList.add('menu-invisible');
    item.style.transform = 'translateY(-10px)';
  })
  
  hiddenMenus.forEach((itme) => {
    itme.style.opacity = '1';
    itme.style.display = 'block';
    itme.style.pointerEvents = 'all';
  })
  
  searchMark.style.transform = 'translate(-470px, 2px)';
  // createSearchInput();
})

xMark.addEventListener('click', () => {
  menuItems.forEach((item) => {
    item.classList.remove('menu-invisible');
    item.style.transform = 'translateY(0px)';
  })

  hiddenMenus.forEach((itme) => {
    itme.style.opacity = '0';
    itme.style.display = 'absolute';
    itme.style.pointerEvents = 'none';
  })

  searchMark.style.transform = 'translate(0px, 0px)';
})

// 메인 화면을 유저의 브라우저 크기에 맞추기
console.log(window.innerHeight);

const mainWrap = document.querySelector('.main__wrap')
window.addEventListener('load', () => {
  mainWrap.style.height = `${window.innerHeight}px`;
  // mainImg.style.width = `${window.innerWidth}px`;
})