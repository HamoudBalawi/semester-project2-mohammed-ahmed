import { fetchStoredProducts } from "./components/storage.js";
import { createMenu } from "./components/common/menu.js";
import { logoutButton } from "./components/common/logout.js";

createMenu();
logoutButton();

/**
 * CartItems creates innerHTML from objects
 *
 */

const cartItems = fetchStoredProducts();

const container = document.querySelector(".cart-list");
const totalPrice = document.querySelector(".total");

let total = 0;

if (cartItems.length === 0) {
  container.innerHTML = "Cart is empty";
}

cartItems.forEach(function (cartItem) {
  total += parseInt(cartItem.price);

  container.innerHTML += `
                          <div class="row py-3 shoppingcart-items my-3">
                            <div class="col-sm-12  col-lg-6 shoppingcart-item-image">
                              <img src="${cartItem.image}" class="cart-image"  "alt="${cartItem.title}"/>
                            </div>
                            <div class="col-sm-12 col-lg-4 py-3">
                              <h5>${cartItem.title}</h5>
                            </div>
                            <div class="col-sm-12  col-lg-2">
                              <p>${cartItem.price} kr</p>    
                            </div>
                          </div>`;
});

totalPrice.innerHTML = `Total: ${total} kr
                        <div class="py-3">
                          <button class="btn btn-primary">Check Out</button>
                        </div>`;
