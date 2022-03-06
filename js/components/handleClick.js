import { displayCart } from "../utils/renderedCart.js";
import { fetchStoredProducts, storeProducts } from "./storage.js";



export function handleClick(){
  const buttons = document.querySelectorAll(".add-cart-button");

    buttons.forEach(function (button) {
      button.onclick = function (event) {

 

    const id = event.target.dataset.id;
    const title = event.target.dataset.title;
    const price = event.target.dataset.price;
    const image = event.target.dataset.image;
    const description = event.target.dataset.description;
    const alt = event.target.dataset.alt
  
    const existingProducts = fetchStoredProducts();

  const itemExist = existingProducts.find(function (item) {
    return item.id === id;
  });
  console.log(itemExist)

  if (!itemExist) {
    const product = { id: id, title: title, price: price, image: image, description: description, alt: alt};
    existingProducts.push(product);
    console.log(product)
   
    storeProducts(existingProducts);
   displayCart(existingProducts)
   button.innerHTML = "Remove from cart";
    
  } else {
    const newProducts = existingProducts.filter((item) => item.id !== id);
    storeProducts(newProducts);
    displayCart(newProducts)
    button.innerHTML = "Add to cart";
   }
  };
 });
}






