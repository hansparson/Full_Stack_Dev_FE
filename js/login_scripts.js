function login() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  fetch('http://0.0.0.0:8000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(response => {
    if (response.ok) {

      return response.json();
    } else if (response.status === 401) {
      throw new Error('User not found');
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(data => {
    const token = data.response_data.token;
    const type_user = JSON.parse(atob(token.split('.')[1])).type_user;
  
    if (type_user === 'ADMIN') {
      // Redirect to the admin page with token as a query parameter
      window.location.href = `list_item_admin.html?token=${token}`;
    } else {
      // Redirect to the user page with token as a query parameter
      window.location.href = `list_item_user.html?token=${token}`;
    }
  })
  .catch(error => {
    alert(error.message);
  });
}
