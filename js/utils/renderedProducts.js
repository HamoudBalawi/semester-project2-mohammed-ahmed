import { baseUrl } from "../settings/api.js";

export function renderedProducts(productsResult) {
  const container = document.querySelector(".elements-container");

  container.innerHTML = "";

  productsResult.forEach(function (result) {

let image = "";

if (result.image) {
    
image = baseUrl + result.image.formats.large.url

} else {
  

image =  result.image_url


}

      container.innerHTML += `<div class="product">
                               <a href="productdetails.html?id=${result.id}">
                                <img src="${image}">
                                <h4>${result.title}</h4>
                                <p>Price ${result.price} kr</p>
                               </a>
                               <button>Add To Cart</button>
                              </div>`;
    
  });
}


