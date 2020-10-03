// код для появления статуса заказа
// function removeOrderModal() {
//   statusModBox.classList.add('off');
//   statusModBox.classList.remove('on');
//   statusModBox.classList.remove('anim');
//   darken.classList.toggle('off');
// }
//
// function addOrderModal() {
//   statusModBox.classList.remove('off');
//   statusModBox.classList.add('on');
//   darken.classList.toggle('off');
// }
//
//
// statusModBoxRmv.onclick = () => {
//   statusModBox.classList.add('anim');
//   setTimeout(removeOrderModal, 500);
// }
//
// darken.onclick = () => {
//   statusModBox.classList.add('anim');
//   setTimeout(removeOrderModal, 500);
// }
// window.addEventListener("keydown", function (evt) {
//   if (statusModBox.classList.contains('on')) {
//     if (evt.keyCode === 27) {
//       evt.preventDefault();
//       statusModBox.classList.add('anim');
//       setTimeout(remove, 500);
//     }
//   }
// });
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

// techsupport modal chatwindow - inputfield interaction code

inptContainer.onclick = () => {
  if (inptContainer.innerHTML == 'Type here') {
    inptContainer.innerHTML = '';
    inptContainer.addEventListener('keydown', function(e) {
    	if (!e.shiftKey && e.keyCode === 13) {
        //str transform block
        var str = inptContainer.innerText;
        var ans = '';
        for (let i = 0; i <= str.length; i++) {
          if (i == 10) {
            ans += `${str.slice(0, i)}\n`;
            str =  `${str.slice(i)}`;
            i -= i;
            }
            inptContainer.innerText = `${ans}${str}`;
        }

        // TODO: spacekey control + window cursor out

        //str transform block
      	console.log('sending a message');
        chatMsgWindow.insertAdjacentHTML('beforeend', `<div class="chat-second-line"><div id="clientMsg" class="message">${inptContainer.innerText}</div></div>`);
        inptContainer.innerHTML = '';
        chatMsgWindow.scrollTop += chatMsgWindow.clientHeight;
        e.preventDefault();
      }
    });
  }
};

// techsupport modal chatwindow - inputfield interaction code


window.onclick = function(event) {
  if (event.target.id != 'inptContainer' && inptContainer.innerHTML == '') {
    inptContainer.innerHTML = 'Type here';
  }
};


// techsupport modal chatwindow - inputfield interaction code




//TODO 'typehere remover code'
