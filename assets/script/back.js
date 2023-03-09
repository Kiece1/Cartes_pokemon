let backCardTest = [];

function backCardRot(item) {
  item.style.transform = `rotateY(180deg)`;
  item.style.transition = `500ms`;
}
function backCardText(item) {
  item.style.color = `black`;
}

function backCard(item, item2) {
  backCardRot(item);
  backCardText(item2);
}
