import { baseUrl } from "../settings/api.js";

/**
 * Creates innerHTML from an object
 * @param {Object} item - properties of object
 * @property {number} item.id - object's id
 * @property {string} item.image - object's image
 * @property {string} item.title - object's title
 * @property {string} item.description - object's description
 * @property {number} item.price - object's price
 * @example
 * renderedDetails(item)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 * The description of the object
 * The price of the object
 */

export function renderedDetails(item) {
  const container = document.querySelector(".product-details-container");

  container.innerHTML = "";

  let image = "";

  if (item.image) {
    image = baseUrl + item.image.formats.large.url;
  } else {
    image = item.image_url;
  }

  container.innerHTML += `<div class="row my-3"> 
                            <div class="product-details">
                               <div class="card-img-top active embed-responsive product-details-img col-sm m-1"  style="background-image: url(${image})" alt="${item.title}"></div>
                               <img class="w-25 m-1" src="${image}" "alt="${item.title}"/>
                            </div>                      
                            <div class="product-details-text col-sm mx-3">
                               <h2>${item.title}</h2>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="far fa-star"></i>
                               <i class="far fa-star"></i>
                               <p class="py-2">Price ${item.price} kr</p>
                               <button class="btn btn-primary mb-4 add-cart-button" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-image="${image}" data-description="${item.description}" data-alt="${details.title}" >Add To Cart</button>  
                               <h5>Description</h5>
                               <p>${item.description}</p>                    
                            </div>
                          </diV>`;
}
