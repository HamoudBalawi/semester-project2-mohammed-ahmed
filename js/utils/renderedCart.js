// import { baseUrl } from "../settings/api.js";
import { fetchStoredProducts } from "../components/storage.js";

const shopCart = document.querySelector(".shoppingcart");
const cartList = document.querySelector(".cart-list");
const totalPrise = document.querySelector(".total");

/* export function displayCart(cartItems) {
  shopCart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;

  cartItems.forEach(function (cartElement) {
    total += parseInt(cartElement.price);
    console.log(total);
    cartList.innerHTML += `
                        <div class="cart-item">                      
                        <a ref="details.html?id=${cartElement.id}" >
                        <img src="${baseUrl + cartElement.image.formats.large.url}"  class="cart-image" "alt="${cartElement.image.alternativeText}"/>
                        </a>
                        <h5>${cartElement.title}</h5>
                        </div>`;
  });
  totalPrise.innerHTML = `Total: ${total} kr`;
}*/

 export function displayCart() {
  shopCart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;

 const existingProducts = fetchStoredProducts();

  existingProducts.forEach(function (cartElement) {
    total += parseFloat(cartElement.price);
    console.log(total);
    cartList.innerHTML += `
                        <div class="cart-item">                      
                        <a ref="details.html?id=${cartElement.id}" >
                        <img src="${cartElement.image}"  class="cart-image" "alt="$"/>
                        </a>
                        <h5>${cartElement.title}</h5>
                        </div>`;
  });
  totalPrise.innerHTML = `Total: ${total} kr`;
}
