const idBody = document.getElementById("idBody");
let NCardsRect = 4;

for (let index = 1; index <= NCardsRect; index++) {
  fetch(`https://pokebuildapi.fr/api/v1/pokemon/00${index}`)
    .then((resp) => resp.json())
    .then(
      (data) =>
        (idBody.innerHTML += `<div id="idCardRect${index}" class="cardRect colCenter" 
          onmousedown="clickCardTest[${index}] = true"
          onmouseup="clickCardTest[${index}] = false"
          ondblclick="backCard(idCardRect${index},idCardRectH2[${index}])">
          <div class="imgCont">
            <img src="https:\/\/raw.githubusercontent.com\/PokeAPI\/sprites\/master\/sprites\/pokemon\/other\/official-artwork\/${index}.png">
          </div>
          <h2>${data.name}</h2>
          <p>Statistics - HP : ${data.stats.HP}</p>
          <p>Statistics - Attack : ${data.stats.attack}</p>
          <p>Statistics - Special Attack : ${data.stats.special_attack}</p>
          <p>Statistics - Special Defense : ${data.stats.special_defense}</p>
          <p>Statistics - Special Speed : ${data.stats.speed}</p>
        </div>`)
    );
}

// fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
// .then(resp=> resp.json())
// .then(data => )
