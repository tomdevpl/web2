const main = document.getElementById("scrollMain");
const hello = document.getElementById("scrollHello");
const since = document.getElementById("scrollSince");
const sensi = document.getElementById("scrollSensi");
const white = document.getElementById("scrollWhite");
const scrollMiddle = document.getElementById("scrollMiddle");
const scrollLeft = document.getElementById("scrollLeft");
const borderLeft = document.getElementById("borderLeft");
const mainMenu = document.getElementById("mainMenu");
const stripe1 = document.getElementById("stripe1");
const stripe2 = document.getElementById("stripe2");
const stripe3 = document.getElementById("stripe3");
const menuText = document.getElementById("menuText");
const stripeCont = document.getElementById("stripeCont");
const divMenu = document.getElementById("divMenu");
const scrollright = document.getElementById("scrollRight");
const mMenuButton = document.getElementById("mMenuButton");
const name = document.getElementById("name");
const favButton = document.getElementById("favButton");


window.addEventListener("scroll", scroll);

function scroll() {
  // console.log(scrollY)
  if (scrollY < 100) {
    main.classList.remove("scrollMain");
    hello.classList.remove("scrollHello");
    since.classList.remove("scrollSince");
    sensi.classList.remove("scrollSensi");
    white.classList.remove("scrollWhite");
    scrollMiddle.classList.remove('opacityMiddle');
    scrollLeft.classList.remove('scrollLeftBottom');
    scrollRight.classList.remove('scrollRightBottom');

  } else if (scrollY > 2600) {
    scrollLeft.classList.remove('scrollLeftBottom');
  } else if (scrollY > 100) {
    main.classList.add("scrollMain");
    hello.classList.add("scrollHello");
    since.classList.add("scrollSince");
    sensi.classList.add("scrollSensi");
    white.classList.add("scrollWhite");
    scrollMiddle.classList.add('opacityMiddle');
    scrollLeft.classList.add('scrollLeftBottom');
    scrollRight.classList.add('scrollRightBottom');

  }


};

mainMenu.addEventListener('mouseover', mouseover);

function mouseover() {
  borderLeft.classList.add('leftHov');
  stripe1.classList.add('stripe1Hov');
  stripe2.classList.add('stripe2Hov');
  stripe3.classList.add('stripe3Hov');
};

mainMenu.addEventListener('mouseout', mouseout);

function mouseout() {
  borderLeft.classList.remove('leftHov');
  stripe1.classList.remove('stripe1Hov');
  stripe2.classList.remove('stripe2Hov');
  stripe3.classList.remove('stripe3Hov');
};

scrollRight.addEventListener('click', scrollTop);

function scrollTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


mainMenu.addEventListener('click', menu);

let flag = false;

function menu() {

  if (flag === false) {
    stripe1.classList.add('stripe1Click');
    stripe2.classList.add('stripe2Click');
    stripe3.classList.add('stripe3Click');
    menuText.classList.add('menuTextClick');
    stripeCont.classList.add('stripeContClick');
    mainMenu.removeEventListener('mouseout', mouseout);
    mainMenu.removeEventListener('mouseover', mouseover);
    scrollLeft.style.opacity = '0';
    main.classList.add("mainClick");
    hello.style.opacity = "0";
    divMenu.classList.add('divMenuClick');
    scrollRight.classList.remove('scrollRightBottom');
    flag = true;

  } else if (flag === true) {
    stripe1.classList.remove('stripe1Click');
    stripe2.classList.remove('stripe2Click');
    stripe3.classList.remove('stripe3Click');
    menuText.classList.remove('menuTextClick');
    stripeCont.classList.remove('stripeContClick');
    mainMenu.addEventListener('mouseout', mouseout);
    mainMenu.addEventListener('mouseover', mouseover);
    scrollLeft.style.opacity = '1';
    main.classList.remove("mainClick");
    hello.style.opacity = "1";
    divMenu.classList.remove('divMenuClick');
    scrollRight.classList.add('scrollRightBottom');
    flag = false;
  }

};

mMenuButton.addEventListener('click', mMenu);

// let flag = false;

function mMenu() {

  if (flag === false) {
    divMenu.style.left = '0%';
    divMenu.style.top = '0';
    name.style.display = 'none';
    favButton.classList.remove('fa-bars');
    favButton.classList.add('fa-times');
    menuText.classList.add('menuTextClick');
    stripeCont.classList.add('stripeContClick');
    mainMenu.removeEventListener('mouseout', mouseout);
    mainMenu.removeEventListener('mouseover', mouseover);
    scrollLeft.style.opacity = '0';
    main.classList.add("mainClick");
    hello.style.opacity = "0";
    divMenu.classList.add('divMenuClick');
    scrollRight.classList.remove('scrollRightBottom');
    flag = true;

  } else if (flag === true) {
    divMenu.style.left = '-300%';
    name.style.display = 'block';
    favButton.classList.add('fa-bars');
    favButton.classList.remove('fa-times');
    menuText.classList.remove('menuTextClick');
    stripeCont.classList.remove('stripeContClick');
    mainMenu.addEventListener('mouseout', mouseout);
    mainMenu.addEventListener('mouseover', mouseover);
    scrollLeft.style.opacity = '1';
    main.classList.remove("mainClick");
    hello.style.opacity = "1";
    divMenu.classList.remove('divMenuClick');
    scrollRight.classList.add('scrollRightBottom');
    flag = false;
  }

};