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

      container.innerHTML += `<div class="container py-4 admin-items">
                                <div class="row"> 
                                  <div class="col-sm-12  col-lg-4">
                                     <a href="editproduct.html?id=${result.id}">
                                       <img class="admin-item-image" src="${image}" alt="${result.title}"> 
                                     </a>
                                  </div>
                                  <div class="col-sm-12 col-lg-5">
                                     <h4>${result.title}</h4>
                                     <p class="admin-item-details">Description${result.description}</p>
                                  </div>
                                  <div class="col-sm-12 col-lg-2">
                                     <p>Price ${result.price} kr</p>
                                  </div>
                                  <div class="col-sm-12 col-lg-1">
                                     <a href="editproduct.html?id=${result.id}">
                                       <button class="btn btn-primary px-4" >Edit</button>
                                     </a>
                                  </div>
                                </div>
                              </div>`;
    
  });
}
 