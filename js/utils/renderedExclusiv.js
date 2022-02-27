
import { baseUrl } from "../settings/api.js";

export function renderExclusive(productsResult) {
  const container = document.querySelector(".exclusive-item");

  container.innerHTML += "";

  productsResult.forEach(function (result) {

let image = "";

if (result.image) {
    
image = baseUrl + result.image.formats.large.url

} else {
  

image =  result.image_url


}



    if (result.id === 1) {
      container.innerHTML += `<div class="exclusive-item d-md-flex d-lg-flex justify-content-center">  
                               <div class="card-img-top exlusive-item-img"  style="background-image: url(${image})"   alt="" ></div>
                               <div class="exlusive-item-details">
                                <h3 class="card-title mb-1">${result.title}</h3>
                                <p class="card-text mb-2" >${result.description}</p>
                                <button>Check item</button>                                      
                               </div>
                               </div>

                              `;
    }
  });
}














