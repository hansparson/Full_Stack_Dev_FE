// Retrieve token from localStorage
// Get token from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

// Store token in localStorage
localStorage.setItem('token', token);


if (token) {
  // Make a GET request to the API endpoint using fetch
  fetch('http://0.0.0.0:8000/products/all_products', {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  })
  .then(response => response.json())
  .then(data => {
      // Use JavaScript to dynamically generate the table rows from the response data
      const productsList = document.getElementById('products-list');
      data.response_data.forEach(product => {
          const productRow = document.createElement('tr');
          productRow.innerHTML = `
              <td>${product.item_name}</td>
              <td>${product.description}</td>
              <td>${product.quantity}</td>
          `;
          productsList.appendChild(productRow);
      });
  })
  .catch(error => console.error(error));
} else {
  // Redirect user to login page
  window.location.href = 'index.html';
}
