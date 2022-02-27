import { baseUrl } from "../settings/api.js";

export function renderedDetails(details) {

  const container = document.querySelector(".product-details-container");

  container.innerHTML = "";

  let image = "";

if (details.image) {
    
image = baseUrl + details.image.formats.large.url

} else {
  

image =  details.image_url


}
console.log(image)

  container.innerHTML += `<div class="product">
                           <a href="productdetails.html?id=${details.id}">
                           <img src="${image}">
                             <h4>Title:${details.id}</h4>
                             <p>Price ${details.price} kr</p>
                            <p>Description ${details.description}</p>
                            </a>
                            <button data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-image="${image}" data-description="${details.description}" data-alt="" >Add To Cart</button>
                          </div>`;
}
