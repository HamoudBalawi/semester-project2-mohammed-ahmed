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
                             <img src="${image} "alt="$"/>
                             <h4>Title:${details.id}</h4>
                             <p>Price ${details.price} kr</p>
                            </a>
                            <i class="fa fa-trash" data-id="${details.id}">
                            <i class="fa-solid fa-basket-shopping"></i>
                            <button data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-image="${image}"  data-alt="${details.image.alternativeText}" >Add To Cart</button>
                          </div>`;
}
