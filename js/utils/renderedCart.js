import { fetchStoredProducts } from "../components/storage.js";

const shopCart = document.querySelector(".shoppingcart");
const cartList = document.querySelector(".cart-list");
const totalPrise = document.querySelector(".total");
const checkout = document.querySelector(".checkout")

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
 
if(existingProducts.length === 0){
  cartList.innerHTML = "Cart is empty";

}
  existingProducts.forEach(function (cartElement) {



    total += parseFloat(cartElement.price);
  
    cartList.innerHTML += `
                        <div class="cart-item">                      
                        <a href="productdetails.html?id=${cartElement.id}" >
                        <img src="${cartElement.image}"  class="cart-image" "alt="$"/>
                        </a>
                        <h5>${cartElement.title}</h5> 
                        </div>`;
  });

  totalPrise.innerHTML = `Total: ${total} kr`;
  checkout.innerHTML = `<a href="shoppingcart.html">Checkout</a>`;
}
