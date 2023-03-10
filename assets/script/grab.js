// --------------------------------------------------------------------------------------- //
// PARAMETRES ---------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------- //

let idCardRect = [];
let NcardsRect = 36;
let clickCardTest = [];
let zIndexCards = 0;

const idBody = document.getElementById("idBody");

for (let index = 0; index <= NcardsRect - 1; index++) {
  idCardRect[index] = document.getElementById(`idCardRect${index}`);
  clickCardTest[index] = false;
}

// --------------------------------------------------------------------------------------- //
// GENERATEUR de CARTES avec API & FETCH ------------------------------------------------- //
// --------------------------------------------------------------------------------------- //

for (let index = 0; index <= NcardsRect - 1; index++) {
  fetch(`https://pokebuildapi.fr/api/v1/pokemon/00${index + 1}`)
    .then((resp) => resp.json())
    .then(
      (data) =>
        (idBody.innerHTML += `<div id="idCardRect${index}" class="cardRect colCenter" 
      onmousedown="clickCardTest[${index}] = true"
      onmouseup="clickCardTest[${index}] = false"
      ondblclick="backCard(idCardRect${index},idCardRectH2[${index}])">
      <div class="imgCont">
      <img src="https:\/\/raw.githubusercontent.com\/PokeAPI\/sprites\/master\/sprites\/pokemon\/other\/official-artwork\/${
        index + 1
      }.png">
      </div>
      <h2 class="colCenter">${data.name}</h2>
      <p>
        HP : ${data.stats.HP}<br />
        Attack : ${data.stats.attack}<br />
        Special Attack : ${data.stats.special_attack}<br />
        Special Defense : ${data.stats.special_defense}<br />
        Special Speed : ${data.stats.speed}
      </p>
      </div>`)
    );
}

// --------------------------------------------------------------------------------------- //
// DEFINITION de la FONCTION GRAB -------------------------------------------------------- //
// --------------------------------------------------------------------------------------- //

function grab(event) {
  let cardRectWidth = [];
  let cardRectHeight = [];

  for (let index = 0; index <= NcardsRect - 1; index++) {
    idCardRect[index] = document.getElementById(`idCardRect${index}`);
  }

  idCardRect.forEach((item) => {
    cardRectWidth = item.offsetWidth;
    cardRectHeight = item.offsetHeight;
  });

  for (let index = 0; index <= NcardsRect - 1; index++) {
    if (clickCardTest[index]) {
      idCardRect[index].style.zIndex = zIndexCards;
      idCardRect[index].style.top =
        event.clientY - (1 / 1) * cardRectWidth + "px";
      idCardRect[index].style.left =
        event.clientX - (1 / 4) * cardRectHeight + "px";
      zIndexCards++;
    }
  }
}

// --------------------------------------------------------------------------------------- //
// UTILISATION de la FONCTION GRAB selon la methode "MOUSEMOVE" -------------------------- //
// --------------------------------------------------------------------------------------- //

function grabCard(event) {
  grab(event);
}

window.addEventListener("mousemove", grabCard);
