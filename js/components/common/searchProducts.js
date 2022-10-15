import { renderedProducts } from "../../utils/renderedProducts.js";

/**
 * searchProduct returns innerHTML that displays objects name
 * @param {string} products
 * * @example
 * searchProduct(name);
 * Creates innerHTML that displays or No searched products Available
 * // Adidas
 * // No searched products Available
 */

export function searchProduct(products) {
  const container = document.querySelector(".elements-container");
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const searchedProducts = products.filter(function (product) {
      if (product.title.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    if (searchedProducts.length === 0) {
      return (container.innerHTML = "No searched products Available");
    }

    renderedProducts(searchedProducts);
  };
}
