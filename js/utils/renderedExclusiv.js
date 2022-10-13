import { baseUrl } from "../settings/api.js";

/**
 * Creates innerHTML from an array of objects
 * @param {Array.<Object>} items - array of objects
 * @param {number} item.id - object's id
 * @param {string} item.image - object's image
 * @param {string} item.title - object's title
 * @param {string} item.description - object's description
 * @param {number} item.id- object's id
 * @example
 * renderedExclusive(items)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 * The description of the object
 */

export function renderExclusive(items) {
  const container = document.querySelector(".exclusive-item");

  container.innerHTML = "";

  items.forEach(function (item) {
    const image = baseUrl + item.image.formats.large.url;

    if (item.id === 1) {
      container.innerHTML += `<div class="exclusive-item  d-md-flex d-lg-flex justify-content-center">  
                                 <div class="card-img-top exlusive-item-img"  style="background-image: url(${image})" alt="${item.title}"></div>
                                 <div class="exlusive-item-details pl-lg-5 pl-md-5">
                                    <h3 class="card-title mb-1 text-center">EXCLUSIVE</h3>
                                    <h5 class="card-title mb-1 text-center">${item.title}</h5>
                                     <p class="card-text mb-2" >${item.description}</p>
                                     <a href="productdetails.html?id=${item.id}" class="d-flex justify-content-center">
                                       <button class="btn btn-primary">Details</button>
                                     </a>                                    
                                 </div>
                               </div>

                              `;
    }
  });
}
