import { baseUrl } from "../settings/api.js";

/**
 * Creates innerHTML from an array of objects
 * @param {Array.<Object>} items - array of objects
 * @param {number} item.id - object's id
 * @param {string} image - object's image
 * @param {string} item.title - object's title
 * @param {string} item.description - object's description
 * @param {number} item.price- object's price
 * @example
 * renderedAdmin(items)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 * The description of the object
 * The price of the object
 */

export function renderedAdmin(items) {
  const container = document.querySelector(".admin-container");

  container.innerHTML = "";

  items.forEach(function (item) {
    let image = "";

    if (item.image) {
      image = baseUrl + item.image.formats.large.url;
    } else {
      image = item.image_url;
    }

    container.innerHTML += `<div class="container py-4 admin-items">
                                <div class="row"> 
                                  <div class="col-sm-12  col-lg-4">
                                     <a href="editproduct.html?id=${item.id}">
                                       <img class="admin-item-image" src="${image}" alt="${item.title}"> 
                                     </a>
                                  </div>
                                  <div class="col-sm-12 col-lg-5">
                                     <h4>${item.title}</h4>
                                     <p class="admin-item-details">Description${item.description}</p>
                                  </div>
                                  <div class="col-sm-12 col-lg-2">
                                     <p>Price ${item.price} kr</p>
                                  </div>
                                  <div class="col-sm-12 col-lg-1">
                                     <a href="editproduct.html?id=${item.id}">
                                       <button class="btn btn-primary px-4" >Edit</button>
                                     </a>
                                  </div>
                                </div>
                              </div>`;
  });
}
