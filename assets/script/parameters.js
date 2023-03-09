let pageX = document.getElementById("posX");
let pageY = document.getElementById("posY");
let w = window.innerWidth;
let h = window.innerHeight;
let bgColor = document.querySelector("body");
let card = document.querySelector(".card");
let cardH2 = document.querySelector(".card h2");
let idCardIcon = document.getElementById("idCardIcon1");

let cardRect = document.querySelector(".cardRect");

let NcardsRect = 10;
let clickCardTest = [];
let idCardRectH2 = [];
let idLink = [];

for (let index = 0; index <= idCardRect.length; index++) {
  idCardRectH2[index] = document.querySelector(`.cardRect #idH2${index + 1}`);
  idLink[index] = document.getElementById(`idLink${index + 1}`);
  clickCardTest[index] = false;
}

let cardRectBtn = document.querySelector(".cardRect button");

let cardWidth = card.offsetWidth;
let cardHeight = card.offsetHeight;
let cardRectWidth = [];
let cardRectHeight = [];

idCardRect.forEach((item) => {
  cardRectWidth = item.offsetWidth;
  cardRectHeight = item.offsetHeight;
  item.style.top = `${h / 20}px`;
  item.style.left = `${w / 20}px`;
});

idCardIcon.style.top = `${cardHeight / 2}px`;
idCardIcon.style.left = `${cardWidth / 2}px`;
card.style.top = `${(h - cardHeight) / 2}px`;
card.style.left = `${(w - cardWidth) / 2}px`;
// cardH2.style.top = `${cardHeight / 2}px`;
// cardH2.style.left = `${cardWidth / 2}px`;
