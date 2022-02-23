import { baseUrl } from "../settings/api.js";

export function renderItems(productsResult) {
  const container = document.querySelector(".items-container");

  container.innerHTML += "";

  productsResult.forEach(function (result) {
    if (result.featured === true) {
      container.innerHTML += `<div class="col-md-6 col-lg-3">
                                <div class="card" >

                               <a href="productdetails.html?id=${result.id}">
                               <div class="card-img-top active embed-responsive embed-responsive-4by3" style="background-image: url(${baseUrl + result.image.formats.large.url})"   alt="${result.image.alternativeText}" ></div>
                               <div class="card-body">
                                <h3 class="card-title mb-1">${result.title}</h3>
                                <p class="card-text mb-2" >${result.price} kr</p>
                            
                               <button class="btn btn-primary">Check Item</button>
                                  </a>
                               </div>
                                </div>
                               </div>

                              `;
    }
  });
}
