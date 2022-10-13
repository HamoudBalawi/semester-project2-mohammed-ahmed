import { baseUrl } from "./settings/api.js";
import { renderBanner } from "./utils/renderedBanner.js";
import { renderExclusive } from "./utils/renderedExclusiv.js";
import { logoutButton } from "./components/common/logout.js";
import { createMenu } from "./components/common/menu.js";
import { renderFeatured } from "./utils/renderedFeatured.js";
import { displayMessage } from "./components/common/displayMessage.js";

/**

 * displayMessage displays a response to the user
 */

/**
 * createBanner Creates innerHTML from an object
 * @param {object>} bannerUrl - object
 * * @example
 * fetch(item)
 * Creates innerHTML that displays
 * The image of an object
 */

/**
 * renderExclusive & renderFeatured Creates innerHTML from an array of objects
 * @param {Array.<Object>} url - array of objects
 * * @example
 * fetch(item)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 * The name of the object
 */

// createMenu displays menu
createMenu();

// logoutButton logs out a user
logoutButton();

const bannerUrl = baseUrl + "/home";

async function createBanner() {
  try {
    const response = await fetch(bannerUrl);
    const result = await response.json();

    renderBanner(result);
  } catch (error) {
    console.log(error);
    displayMessage("error", "Unknown error occured", ".items-container");
  }
}
createBanner();

const url = baseUrl + "/products";

async function createProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    renderExclusive(result);
    renderFeatured(result);
  } catch (error) {
    console.log(error);
    displayMessage("error", "Unknown error occured", ".items-container");
  }
}
createProducts();
