import { baseUrl } from "./settings/api.js";
import { fetchStoredProducts} from "./components/storage.js"
import { createMenu } from "./components/common/menu.js";
createMenu()
const cartItems = fetchStoredProducts();
console.log(cartItems)
const container = document.querySelector(".cart-list");
const totalPrice = document.querySelector(".total");

let total = 0;

cartItems.forEach(function (cartElement) {
  total += parseInt(cartElement.price);
  container.innerHTML += `
                        <div class="">
                        <a ref="details.html?id=${cartElement.id}" >
                        <img src="${baseUrl + cartElement.image.formats.large.url}" class="cart-image" "alt="${cartElement.image.alternativeTex}" />
                        </a>
                        <h5>${cartElement.title}</h5>
                        <button data-id="${cartElement.id}">Add To Cart</button>
                        <i class="fa fa-trash" data-item="${cartElement.id}">
                        </div>`;
});
totalPrice.innerHTML = `Total: ${total}`;
