const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

// Store token in localStorage
localStorage.setItem('token', token);


const form = document.getElementById('add-product-form');
const itemNameSelect = document.getElementById('item-name');

fetch('http://0.0.0.0:8000/products/all_products', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => response.json())
.then(data => {
  if (data.response_code === 'SUCCESS') {
    const items = data.response_data;
    items.forEach(item => {
      const option = document.createElement('option');
      option.value = item.item_name;
      option.textContent = item.item_name;
      itemNameSelect.appendChild(option);
    });
  } else {
    console.error('Failed to fetch item data.');
  }
})
.catch(error => console.error(error));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const itemName = itemNameSelect.value;
  const newItemName = document.getElementById('new-item-name').value;
  const quantity = document.getElementById('quantity').value;
  const description = document.getElementById('description').value;
  
  const data = {
    item_name: newItemName,
    quantity: quantity,
    description: description
  };
  
  fetch(`http://0.0.0.0:8000/products/update_products?item_name=${itemName}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Product information updated successfully!');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
