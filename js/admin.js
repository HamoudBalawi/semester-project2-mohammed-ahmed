import { baseUrl } from "./settings/api.js";
import { createMenu } from "./components/common/menu.js";
import { searchProduct } from "./components/common/searchProducts.js";
import { renderedAdmin } from "./utils/renderedAdmin.js";
import { logoutButton } from "./components/common/logout.js";
import { getToken } from "./components/storage.js";

const token = getToken();
if (!token) {
  location.href = "/";
}

createMenu();
logoutButton();

/**
 * createProducts Creates innerHTML from an array of objects
 * @param {Array.<Object>} url - array of objects
 * * @example
 * fetch(url)
 * Creates innerHTML that displays
 * The image of the objects
 * The title of the objects
 * The id of the objects
 * The description of the objects
 * The price of the objects
 */

const url = baseUrl + "/products";

async function createProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    renderedAdmin(result);
    searchProduct(result);
  } catch (error) {
    console.log(error);
  }
}
createProducts();
