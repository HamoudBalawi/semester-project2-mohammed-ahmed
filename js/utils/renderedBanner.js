import { baseUrl } from "../settings/api.js";

/**
 * Creates innerHTML from an object
 * @param {Object} item - values of object
 * @property {string} item.backgroudImage - object's image
 * @property {string} item.title - object's title
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
