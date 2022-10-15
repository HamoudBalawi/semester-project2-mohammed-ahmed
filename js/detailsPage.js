import { renderedDetails } from "./utils/renderedDetails.js";
import { handleClick } from "./components/handleClick.js";
import { createMenu } from "./components/common/menu.js";
import { displayMessage } from "./components/common/displayMessage.js";
import { logoutButton } from "./components/common/logout.js";

/**
 * fetchProduct creates innerHTML from an object
 * @param {Object} url - object
 * * @example
 * fetch(url)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 * The name of an object
 * The price of an object
 */

createMenu();
logoutButton();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://localhost:1337/products/" + id;

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    renderedDetails(details);
    handleClick();
  } catch (error) {
    console.log(error);
    displayMessage("error", "Unknown error occured", ".product-details-container");
  }
}
fetchProduct();
