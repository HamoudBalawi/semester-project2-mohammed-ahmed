import { baseUrl } from "../settings/api.js";

export function renderedAdmin(adminProducts) {
  const container = document.querySelector(".admin-container");

  container.innerHTML = "";

  adminProducts.forEach(function (result) {

    
let image = "";

if (result.image) {
    
image = baseUrl + result.image.formats.large.url

} else {
  

image =  result.image_url


}

      container.innerHTML += `<div class="product">
                               <a href="editproduct.html?id=${result.id}">
                                <img src="${image}">
                                <h4>${result.title}</h4>
                                <p>Price ${result.price} kr</p>
                                <p>Description${result.description}</p>
                               <button type="button" class="delete" >Edit</button>
                                  </a>
                              </div>`;
    
  });
}
