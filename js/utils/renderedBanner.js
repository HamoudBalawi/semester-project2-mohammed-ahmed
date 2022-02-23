import { baseUrl } from "../settings/api.js";

export function renderBanner(results) {
  const bannerContainer = document.querySelector(".carousel-inner");

  bannerContainer.innerHTML += "";

   bannerContainer.innerHTML += `<div class="carousel-item active embed-responsive-item" style="background-image: url(${
                                 baseUrl + results.hero_banner.url})"   alt="${
      results.alternativeText
    }" >
                               

                            
                          </div>`; 
}
