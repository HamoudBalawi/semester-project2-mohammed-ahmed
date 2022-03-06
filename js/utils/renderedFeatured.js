import { baseUrl } from "../settings/api.js";

export function renderFeatured(productsResult) {
  const container = document.querySelector(".items-container");

  container.innerHTML = "";

  productsResult.forEach(function (result) {

  let image = "";

  if (result.image) {
    
    image = baseUrl + result.image.formats.large.url

  } else {
  
    image =  result.image_url

  }

  if (result.featured === true) {

      container.innerHTML += `
                                <div class="card py-4">
                                   <a href="productdetails.html?id=${result.id}">
                                   <img class="card-img-top  active embed-responsive" src="${image}" alt="${result.title}">
                                   <div class="card-body">
                                     <p class="card-title mb-1">${result.title}</p>
                                     <p class="card-text mb-2" >${result.price} kr</p>
                                     <button class="btn btn-primary">Details</button>
                                   </div>
                                   </a>
                                </div>
                              `;
    }
  });
}
