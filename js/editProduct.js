import { baseUrl } from "./settings/api.js";
import { getToken } from "./components/storage.js";
import { createMenu } from "./components/common/menu.js";
import { displayMessage } from "./components/common/displayMessage.js";
import { buttonDelete } from "./components/common/deleteProduct.js";
import { logoutButton } from "./components/common/logout.js";

const token = getToken();
if (!token) {
  location.href = "/";
}

createMenu();
logoutButton();

/**
 * fetchProduct creates innerHTML from an object
 * @property {string} result.title - objects title
 * @property {number} result.price - objects price
 * @property {string} result.description - objects description
 * @property {string} result.image_url - objects image
 * @property {string} result.id - objects id
 * @example
 * fetch(item)
 * Creates innerHTML that displays
 * The image of an object
 * The title of an object
 * The id of the object
 * The description of the object
 */

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
if (!id) {
  document.location.href = "/";
}

const proUrl = baseUrl + "/products/" + id;

const message = document.querySelector(".message-container");
const form = document.querySelector("form");
const idInput = document.querySelector("#id");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const imageUrl = document.querySelector("#file");

async function fetchProduct() {
  try {
    const response = await fetch(proUrl);
    const result = await response.json();

    if (!result.image_url) {
      result.image_url = result.image.formats.large.url;
    } else {
      result.image_url = result.image_url;
    }

    title.value = result.title;
    price.value = result.price;
    description.value = result.description;
    imageUrl.value = result.image_url;
    idInput.value = result.id;

    console.log(result);
    buttonDelete(id);
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();

form.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  const imageUrlValue = imageUrl.value.trim();
  const idValue = id;

  if ((titleValue.length === 0 || priceValue.length === 0 || priceValue.length === 0, imageUrlValue.length === 0)) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  }

  updateProduct(titleValue, priceValue, descriptionValue, imageUrlValue, idValue);
}

/**
 * updateProduct updates an object
 * @param {string} titleValue title of an object
 * @param {number} priceValue price of an object
 * @param {string} descriptionValue description of an object
 * @param {string} imageUrlValue image of an object
 * @param {number} idValue id of an object
 * @example
 * updateProduct(title, price, description, image, id);
 * Displays a response to the user
 * // Product updated on succuss or an error occured on error
 */

async function updateProduct(title, price, description, image_url, id) {
  const apiUrl = baseUrl + "/products/" + id;
  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url,
    image_url,
  });

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(apiUrl, options);
    const result = await response.json();

    console.log(result);
    if (result) {
      displayMessage("success", "Product updated", ".message-container");
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
