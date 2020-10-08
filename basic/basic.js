submit_button.onclick = () => {
  (async () => {

  let user = {
    name: username.value,
    pass: password.value
  };

  let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });

    let result = await response.json();
    alert(result.message);
  })()

}
