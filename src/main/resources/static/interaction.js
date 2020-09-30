// код для появления и закрытия модалки логина

function removeLoginModal() {
  lgnBox.classList.add('off');
  lgnBox.classList.remove('on');
  lgnBox.classList.remove('anim');
  darken.classList.toggle('off');
}

function addLoginModal() {
  lgnBox.classList.remove('off');
  lgnBox.classList.add('on');
  darken.classList.toggle('off');
}

lgnButton.onclick = addLoginModal;
darken.onclick = () => {
  lgnBox.classList.add('anim');
  setTimeout(removeLoginModal, 500);
}
window.addEventListener("keydown", function (evt) {
  if (lgnBox.classList.contains('on')) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      lgnBox.classList.add('anim');
      setTimeout(removeLoginModal, 500);
    }
  }
});

// код для появления и закрытия модалки логина
