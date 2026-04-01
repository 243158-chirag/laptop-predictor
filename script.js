// Simple ML model (Linear Regression trained weights)
function predictPrice(){

let ram = parseInt(document.getElementById("ram").value);
let storage = parseInt(document.getElementById("storage").value);
let processor = parseInt(document.getElementById("processor").value);

// ML trained weights
let price =
(2500 * ram) +
(18 * storage) +
(8000 * processor) +
15000;

document.getElementById("result").innerHTML =
"Predicted Price: ₹ " + Math.round(price);
}


// Product list
const products = [
{id:1,name:"HP i5 Laptop",price:55000,image:"images/hp.jpg"},
{id:2,name:"Dell i7 Laptop",price:72000,image:"images/dell.jpg"},
{id:3,name:"Lenovo i3 Laptop",price:42000,image:"images/lenovo.jpg"},
{id:4,name:"Asus Gaming Laptop",price:88000,image:"images/asus.jpg"}
];

let cart = [];

function loadProducts(){
let container = document.getElementById("products");
container.innerHTML = "";

products.forEach(p=>{
container.innerHTML += `
<div class="card">
<img src="${p.image}" class="product-img">
<h3>${p.name}</h3>
<p>₹ ${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>
`;
});
}

loadProducts();

function addToCart(id){
let product = products.find(p=>p.id===id);
cart.push(product);
updateCart();
}

function updateCart(){
document.getElementById("cart-count").innerText = cart.length;

let items = "";
let total = 0;

cart.forEach(item=>{
items += `<p>${item.name} - ₹${item.price}</p>`;
total += item.price;
});

document.getElementById("cart-items").innerHTML = items;
document.getElementById("total").innerText = "Total: ₹ " + total;
}

function toggleCart(){
document.getElementById("cart").classList.toggle("open");
}

function checkout(){
alert("Order placed successfully!");
cart=[];
updateCart();
}