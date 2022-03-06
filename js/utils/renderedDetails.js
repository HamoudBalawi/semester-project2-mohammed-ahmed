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

  container.innerHTML += `<div class="row my-3"> 
                            <div class="product-details">
                               <div class="card-img-top active embed-responsive product-details-img col-sm m-1"  style="background-image: url(${image})" alt="${details.title}"></div>
                               <img class="w-25 m-1" src="${image}" "alt="${details.title}"/>
                            </div>                      
                            <div class="product-details-text col-sm mx-3">
                               <h2>${details.title}</h2>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="far fa-star"></i>
                               <i class="far fa-star"></i>
                               <p class="py-2">Price ${details.price} kr</p>
                               <button class="btn btn-primary mb-4 add-cart-button" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-image="${image}" data-description="${details.description}" data-alt="${details.title}" >Add To Cart</button>  
                               <h5>Description</h5>
                               <p>${details.description}</p>                    
                            </div>
                          </diV>`;
}






