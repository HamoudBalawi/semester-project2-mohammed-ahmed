import { baseUrl } from "../settings/api.js";

/**
 * Creates innerHTML from an array of objects
 * @param {Array.<Object>} items - array of objects
 * @param {number} item.id - object's id
 * @param {string} image - object's image
 * @param {string} item.title - object's title
 * @param {number} item.price - object's price
 * @example
 * renderedFeatured(items)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 * The name of the object
 */

export function renderFeatured(items) {
  const container = document.querySelector(".items-container");

  container.innerHTML = "";

  items.forEach(function (item) {
    let image = "";

    if (item.image) {
      image = baseUrl + item.image.formats.large.url;
    } else {
      image = item.image_url;
    }

    if (item.featured === true) {
      container.innerHTML += `
                                <div class="card py-4">
                                   <a href="productdetails.html?id=${item.id}">
                                   <img class="card-img-top  active embed-responsive" src="${image}" alt="${item.title}">
                                   <div class="card-body">
                                     <p class="card-title mb-1">${item.title}</p>
                                     <p class="card-text mb-2" >${item.price} kr</p>
                                     <button class="btn btn-primary">Details</button>
                                   </div>
                                   </a>
                                </div>
                              `;
    }
  });
}
