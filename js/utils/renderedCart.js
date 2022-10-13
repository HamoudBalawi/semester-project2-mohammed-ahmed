import { fetchStoredProducts } from "../components/storage.js";

/**
 * DisplayCart creates innerHTML from an array of objects
 * @param {Array.<Object>} items - array of objects
 * @param {number} item.id - object's id
 * @param {string} image - object's image
 * @param {string} item.title - object's title
 * @param {number} item.price - object's price
 * @example
 * renderedProducts(items)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 * The name of the object
 */

const shopCart = document.querySelector(".shoppingcart");
const cartList = document.querySelector(".cart-list");
const totalPrise = document.querySelector(".total");
const checkout = document.querySelector(".checkout");
const closeButton = document.querySelector(".close-button");

export function displayCart() {
  shopCart.style.display = "block";
  cartList.innerHTML = "";

  let total = 0;

  const existingProducts = fetchStoredProducts();

  if (existingProducts.length === 0) {
    cartList.innerHTML = "Cart is empty";
  }
  existingProducts.forEach(function (cartItems) {
    total += parseFloat(cartItems.price);

    cartList.innerHTML += `
                        <div class="cart-item d-lg-flex justify-content-between p-2">                  
                          <img src="${cartItems.image}" class="cart-image" alt="${cartItems.title}"/> 
                          <div> 
                            <p>${cartItems.title}</p> 
                            <p>${cartItems.price} kr</p> 
                          </div>
                          <a href="productdetails.html?id=${cartItems.id}">View</a>
                        </div>`;
  });

  totalPrise.innerHTML = `Total: ${total} kr`;
  checkout.innerHTML = `<a href="shoppingcart.html"><button class="btn btn-primary">View Cart</button></a>`;
}

export function cartCount(count) {
  const basket = document.querySelector(".basket-item-count");
  basket.innerHTML += `<div class="p-1">${count}</diV>`;
}

closeButton.onclick = function () {
  shopCart.style.display = "none";
};
