// код для появления статуса заказа
function removeOrderModal() {
  statusModBox.classList.add('off');
  statusModBox.classList.remove('on');
  statusModBox.classList.remove('anim');
  darken.classList.toggle('off');
}

function addOrderModal() {
  statusModBox.classList.remove('off');
  statusModBox.classList.add('on');
  darken.classList.toggle('off');
}


statusModBoxRmv.onclick = () => {
  statusModBox.classList.add('anim');
  setTimeout(removeOrderModal, 500);
}

darken.onclick = () => {
  statusModBox.classList.add('anim');
  setTimeout(removeOrderModal, 500);
}
window.addEventListener("keydown", function (evt) {
  if (statusModBox.classList.contains('on')) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      statusModBox.classList.add('anim');
      setTimeout(remove, 500);
    }
  }
});
// todo order status summoner code

// function removeItemCart() {
//   let orderSelect = document.querySelector('select');
//   if (orderSelect.childNodes.) {
//     cardButtonRemoves.onclick = () => {
//       orderSelect.childNodes.selected.remove();
//     }
//   }
// }
// removeItemCart();

// techsupport modal summoner code

techSummon.onclick = () => {
  techSummon.classList.add('tech-anim-out');
  setTimeout(function() {
      techSummon.classList.remove('tech-anim-out');
      techSummon.classList.toggle("techquest-off");
      techsupportModal.classList.remove('tech-modal-off');
      techsupportModal.classList.add('tech-modal-on');
  }, 800);
};

techCross.onclick = () => {
  techsupportModal.classList.add('tech-anim-out');
  setTimeout(function() {
      techsupportModal.classList.remove('tech-anim-out');
      techsupportModal.classList.remove('tech-modal-on');
      techsupportModal.classList.add('tech-modal-off');
      techSummon.classList.remove("techquest-off");
      techSummon.classList.add('techquest-on');
      setTimeout(function() { techSummon.classList.remove('techquest-on') }, 200);
  }, 800);
}

// techsupport modal summoner code

inptContainer.onclick = () => {
  if (inptContainer.innerHTML == 'Type here') {
    inptContainer.innerHTML = '';
  }
};


window.onclick = function(event) {
  if (event.target.id != inptContainer && inptContainer.innerHTML == '') {
    inptContainer.innerHTML = 'Type here';
  }
};



window.addEventListener('keydown', function(evt) {
  if (evt.code === 13) {
    evt.preventDefault();
    console.log('meaow');
  }
});

//TODO 'typehere remover code'

// if (inptContainer.innerHTML = '') {
//   inptContainer.innerHTML = 'Type here';
// }
