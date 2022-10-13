import { baseUrl } from "./settings/api.js";
import { renderedProducts } from "./utils/renderedProducts.js";
import { searchProduct } from "./components/common/searchProducts.js";
import { createMenu } from "./components/common/menu.js";
import { displayMessage } from "./components/common/displayMessage.js";
import { logoutButton } from "./components/common/logout.js";

/**
 * createMenu displays menu
 * logoutButton logs out a user
 * getToken gets token from local storage
 * displayMessage displays a response to the user
 */

/**
 * createProducts Creates innerHTML from an array of objects
 * @param {Array.<Object>} url - array of objects
 * * @example
 * fetch(item)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 * The id of the object
 * The description of the object
 */

createMenu();
logoutButton();

const url = baseUrl + "/products";

async function createProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    renderedProducts(result);
    searchProduct(result);
  } catch (error) {
    console.log(error);
    displayMessage("error", "Unknown error occured", ".elements-container");
  }
}
createProducts();
