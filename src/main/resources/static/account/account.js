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

  }
}

sendPlane.onmousedown = () => {
  let finale = false;
      var str = inptContainer.innerText;
      var msgwidth = document.getElementById('suppMsg').offsetWidth;
      let n = Math.round(msgwidth / 8.6);
      var ans = '';
      let arr = str.split(' ');
      if (str.length <= n) {
        ans += str;
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].length > n) {
            let o = `${arr[i].slice(0, n)}`
            arr.splice(i, 0, o);
            arr[i+1] = `${arr[i+1].slice(n)}`;
          }
        }
        let i = 0;
        if (arr[i].length <= n) {

          while (arr[i].length != 0) {
            if (arr[i].length < n) {
              if (arr[i + 1] == undefined) {
                ans += `${arr[i]}\n`;
                arr[i] = '';
              } else {
                arr[i+1] = `${arr[i]} ${arr[i + 1]}`;
                arr.shift();
              }
            }
            if (arr[i].length == n) {
              ans += `${arr[i]}\n`;
              arr.shift();
            }
            if (arr[i].length > n) {
              if (arr[i + 1] == undefined) {
                let lastspace = arr[i].lastIndexOf(' ');
                ans += `${arr[i].slice(0, lastspace)}\n${arr[i].slice(lastspace+1)}`;
                arr[i] = '';
              } else {
                let lastspace = arr[i].lastIndexOf(' ');
                ans += `${arr[i].slice(0, lastspace)}\n`;
                arr[i+1] = `${arr[i].slice(lastspace+1)} ${arr[i + 1]}`;
                arr.shift();
              }
            }
          }
        }
        finale = ans;
    }


          //str transform block
      if (finale && inptContainer.innerHTML != "Type here") {
      console.log('sending a message');
      chatMsgWindow.insertAdjacentHTML('beforeend', `<div class="chat-second-line"><div id="clientMsg" class="message">${finale}</div></div>`);
      inptContainer.innerHTML = '';
      chatMsgWindow.scrollTop += chatMsgWindow.clientHeight;
      // e.preventDefault();
    }

};

sendPlane.onmouseup = () => {
  finale = false;
}


// techsupport modal chatwindow - inputfield interaction code


window.onclick = function(event) {
  if (event.target.id != 'inptContainer' && inptContainer.innerHTML == '') {
    inptContainer.innerHTML = 'Type here';
  }
};


// techsupport modal chatwindow - inputfield interaction code



// account heightchanger code
function transformAccField() {
  let status = false;
  accAccount.onclick = () => {
    if (!status) {
      accAccount.classList.remove('acc-height-changer-up');
      accAccount.classList.add('acc-height-changer-down');
      setTimeout(function() {
        accSettings.classList.add('settings-display-flex');
        accSettings.classList.remove('settings-display-none');
        accSettings.classList.toggle('settings-off');
        accSettings.classList.toggle('settings-on');
        return status = true;
      }, 500);
    }
    if (status) {
      accSettings.classList.toggle('settings-off');
      accSettings.classList.toggle('settings-on');
      setTimeout(function() {
        accSettings.classList.remove('settings-display-flex');
        accSettings.classList.add('settings-display-none');
        accAccount.classList.remove('acc-height-changer-down');
        accAccount.classList.add('acc-height-changer-up');
        return status = false;
      }, 150);
    }
    return status;
  }
}
transformAccField();
// account heightchanger code ends here

// tips account frame code

// let tooltip;
//
// document.onmouseover = function(event) {
//
//   let anchorElem = event.target.closest('[data-tip]');
//
//   if (!anchorElem) return;
//
//   tooltip = showTooltip(anchorElem, anchorElem.dataset.tip);
// }
//
// document.onmouseout = function() {
//
//   if (tooltip) {
//     tooltip.remove();
//     tooltip = false;
//   }
//
// }
//
//
// function showTooltip(anchorElem, data) {
//
//
//   let tooltipElem = document.createElement('div');
//   tooltipElem.className = 'tooltip';
//   tooltipElem.innerHTML = data;
//
//   document.body.append(tooltipElem);
//
//   let coords = anchorElem.getBoundingClientRect();
//
//   let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
//   if (left < 0) left = 0;
//
//   let top = coords.top + anchorElem.offsetHeight + 5;
//   if (top < 0) {
//     top = coords.top + anchorElem.offsetHeight + 5;
//   }
//
//   tooltipElem.style.left = left + 'px';
//   tooltipElem.style.top = top + 'px';
//
//   return tooltipElem;
// }

// tips account frame code ends here
