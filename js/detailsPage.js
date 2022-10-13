import { renderedDetails } from "./utils/renderedDetails.js";
import { handleClick } from "./components/handleClick.js";
import { createMenu } from "./components/common/menu.js";
import { displayMessage } from "./components/common/displayMessage.js";
import { logoutButton } from "./components/common/logout.js";

/**
 * fetchProduct creates innerHTML from an object
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
