import { baseUrl } from "./settings/api.js";
import { renderedProducts } from "./utils/renderedProducts.js";
import { searchProduct } from "./components/common/searchProducts.js";

const url = baseUrl + "/products";


async function createProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    renderedProducts(result)
    searchProduct(result)
    
  } catch (error) {
    console.log(error);
  }
}
createProducts();