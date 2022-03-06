import { baseUrl } from "../settings/api.js";

export function renderBanner(results) {

  const bannerContainer = document.querySelector(".carousel-inner");

  bannerContainer.innerHTML = "";

   bannerContainer.innerHTML += `<a href="products.html">
                                   <div class="carousel-item cover  w-100 active embed-responsive-item" style="background-image: url(${baseUrl + results.hero_banner.url})" alt="${results.title}" >
                                      <h1>All Sale Items 50%</h1> 
                                   </div>
                                 </a>`; 
}
