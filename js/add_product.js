const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

// Store token in localStorage
localStorage.setItem('token', token);
document.getElementById("add-product-form").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form from submitting normally

    var item_name = document.getElementById("item-name").value;
    var quantity = document.getElementById("quantity").value;
    var description = document.getElementById("description").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://0.0.0.0:8000/products/add_products", true);
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            alert("Product added successfully!");
        }
    };
    xhr.send(JSON.stringify({
        "item_name": item_name,
        "quantity": quantity,
        "description": description
    }));
});