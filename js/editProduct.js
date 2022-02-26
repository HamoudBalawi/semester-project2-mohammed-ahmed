import {baseUrl} from "./settings/api.js"
import { getToken } from "./utils/storage.js";
import createMenu from "./components/common/menu.js";
import { displayMessage } from "./components/common/displayMessage.js";
// import { buttonDelete } from "./deleteProduct.js";

const token = getToken();
if (!token) {
  location.href = "/";
}

createMenu();
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
const file = document.querySelector("#file");

async function fetchProduct() {
  try {
    const response = await fetch(proUrl);
    const result = await response.json();

    title.value = result.title;
    price.value = result.price;
    description.value = result.description;
    file.value = result.file
    idInput.value = result.id;
    
    console.log(result);
  //  buttonDelete(result.id);
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
  const fileValue = file.value.trim();
  const idValue = id;

  if (titleValue.length === 0 || priceValue.length === 0 || priceValue.length === 0, fileValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  }

  updateProduct(titleValue, priceValue, descriptionValue,fileValue, idValue);
}
async function updateProduct(title, price, description,file, id) {
  const apiUrl = baseUrl + "/products/" + id;
  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    file, file
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
