import { baseUrl } from "../settings/api.js";

export function renderExclusive(exclusiveResult) {
  const container = document.querySelector(".exclusive-item");

  container.innerHTML = "";

  exclusiveResult.forEach(function (result) {
   
    if (result.id === 1) {
      container.innerHTML += `<div class="exclusive-item  d-md-flex d-lg-flex justify-content-center">  
                                 <div class="card-img-top exlusive-item-img"  style="background-image: url(${baseUrl + result.image.formats.large.url})" alt="${result.title}"></div>
                                 <div class="exlusive-item-details pl-lg-5 pl-md-5">
                                    <h3 class="card-title mb-1 text-center">EXCLUSIVE</h3>
                                    <h5 class="card-title mb-1 text-center">${result.title}</h5>
                                     <p class="card-text mb-2" >${result.description}</p>
                                     <a href="productdetails.html?id=${result.id}" class="d-flex justify-content-center">
                                       <button class="btn btn-primary">Details</button>
                                     </a>                                    
                                 </div>
                               </div>

                              `;
    }
  });
}














