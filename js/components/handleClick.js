import { displayCart } from "../utils/renderedCart.js";
import { fetchStoredProducts, storeProducts } from "./storage.js";



export function handleClick(){
  const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
      button.onclick = function (event) {

 

    const id = event.target.dataset.id;
    const title = event.target.dataset.title;
    const price = event.target.dataset.price;
    const image = event.target.dataset.image;
    const alt = event.target.dataset.alt

    const existingProducts = fetchStoredProducts();

  const itemExist = existingProducts.find(function (item) {
    return item.id === id;
  });
  console.log(itemExist)

  if (!itemExist) {
    const product = { id: id, title: title, price: price, image: image, alt: alt};
    existingProducts.push(product);
    console.log(product)
    
    storeProducts(existingProducts);
   displayCart(existingProducts)
    
  } else {
    const newProducts = existingProducts.filter((item) => item.id !== id);
    storeProducts(newProducts);
    displayCart(newProducts)
  }
  
      };
    });
}









/*  import { displayCart } from "../utils/renderedCart.js";
import { fetchStoredProducts, storeProducts } from "./storage.js";


export 
  event.target.classList.toggle("fa");
  event.target.classList.toggle("far");

  const id = event.target.dataset.id;
  const title = event.target.dataset.title;
  const price = event.target.dataset.price;
  const image = event.target.dataset.image;

  const existingProducts = fetchStoredProducts();

  const itemExist = existingProducts.find(function (item) {
    return item.id === id;
  });

  if (!itemExist) {
    const product = { id: id, title: title, price: price, image: image };
    existingProducts.push(product);
    console.log(product)
    
    storeProducts(existingProducts);
    
  } else {
    const newProducts = existingProducts.filter((item) => item.id !== id);
    storeProducts(newProducts);
  }
}*/ 
 