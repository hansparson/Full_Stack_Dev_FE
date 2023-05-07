function addProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    // Store token in localStorage
    localStorage.setItem('token', token);
    window.location.href = `add_product.html?token=${token}`;
  }
  

  function editProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    // Store token in localStorage
    localStorage.setItem('token', token);
    window.location.href = `edit_product.html?token=${token}`;
  }

  function deleteProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    // Store token in localStorage
    localStorage.setItem('token', token);
    window.location.href = `delete_product.html?token=${token}`;
  }