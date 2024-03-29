import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/common/displayMessage.js";
import { createMenu } from "./components/common/menu.js";
import { logoutButton } from "./components/common/logout.js";
import { getToken } from "./components/storage.js";

createMenu();
logoutButton();

const token = getToken();
if (!token) {
  location.href = "/";
}

/**
 * addProduct adds an object
 * @param {string} titleValue title of an object
 * @param {number} priceValue price of an object
 * @param {string} descriptionValue description of an object
 * @param {string} imageValue image of an object
 * @param {boolean} checkboxValue checkbox of an object
 * @example
 * addProduct(title, price, description, image, checkbox);
 * Displays a response to the user
 * // Product added on - succuss or an error occured on - error
 */

const message = document.querySelector(".message-container");
const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#file");
const checkbox = document.querySelector("#inlineCheckbox1");

form.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  const imageValue = image.value.trim();
  const checkboxValue = checkbox.checked;

  if (titleValue.length === 0 || priceValue.length === 0 || descriptionValue.length === 0 || imageValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  }

  addProduct(titleValue, priceValue, descriptionValue, imageValue, checkboxValue);
}

async function addProduct(title, price, description, image, checkbox) {
  const apiUrl = baseUrl + "/products";

  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url: image,
    featured: checkbox,
  });

  const option = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(apiUrl, option);
    const result = await response.json();

    console.log(result);
    if (result) {
      displayMessage("success", "Product added", ".message-container");
      form.reset();
    }

    if (result.error) {
      displayMessage("error", result.message, ".message-container");
    }
  } catch (error) {
    console.log(error);
    displayMessage("error", "An error occured", ".message-container");
  }
}
