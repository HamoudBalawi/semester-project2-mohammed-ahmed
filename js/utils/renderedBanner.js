import { baseUrl } from "../settings/api.js";

/**
 * Creates innerHTML from an array of objects
 * @param {Object} item - array of objects
 * @param {string} backgroudImage - object's image
 * @param {string} item.title - object's title
 * @example
 * rendereBanner(item)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 */

export function renderBanner(item) {
  const bannerContainer = document.querySelector(".carousel-inner");
  const backgroundImage = baseUrl + item.hero_banner.url;
  bannerContainer.innerHTML = "";

  bannerContainer.innerHTML += `<a href="products.html">
                                   <div class="carousel-item cover  w-100 active embed-responsive-item" style="background-image: url(${backgroundImage})" alt="${item.title}" >
                                      <h1>All Sale Items 50%</h1> 
                                   </div>
                                 </a>`;
}
