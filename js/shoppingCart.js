import { baseUrl } from "./settings/api.js";
import { fetchStoredProducts} from "./components/storage.js"
import { createMenu } from "./components/common/menu.js";
import { logoutButton } from "./components/common/logout.js";

createMenu()
logoutButton()
const cartItems = fetchStoredProducts();
console.log(cartItems)

const container = document.querySelector(".cart-list");
const totalPrice = document.querySelector(".total");

let total = 0;

if(cartItems.length === 0){
  container.innerHTML = "Cart is empty";
}

cartItems.forEach(function (cartElement) {
  total += parseInt(cartElement.price);
  container.innerHTML += `
                        <div class="">
                        <a href="productdetails.html?id=${cartElement.id}" >
                        <img src="${cartElement.image}" class="cart-image" "alt="${cartElement.alt}" />
                        </a>
                        <h5>${cartElement.title}</h5>
                        <p>${cartElement.description}</p>
                        <i class="fa fa-trash" data-item="${cartElement.id}">     
                        </div>`;
});
totalPrice.innerHTML = `Total: ${total}`;
