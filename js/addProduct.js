import { baseUrl } from "./settings/api.js";
import { getToken } from "./components/storage.js";
//import createMenu from "./components/common/menu.js";
import { displayMessage } from "./components/common/displayMessage.js";



const token = getToken();
if (!token) {
  location.href = "/";
}

const message = document.querySelector(".message-container");
const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#file");

form.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";
  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  const imageValue = image.value.trim()
  console.log("titleValue", titleValue);
  console.log("titleValue", priceValue);
  console.log("titleValue", descriptionValue);

  if (titleValue.length === 0 || priceValue.length === 0 || descriptionValue.length === 0 || imageValue.length === 0) {
    return displayMessage(
      "warning",
      "Please supply proper values",
      ".message-container"
    );
  }

  addProduct(titleValue, priceValue, descriptionValue, imageValue) ;
}

async function addProduct(title, price, description, image) {
  
  const apiUrl = baseUrl + "/products";
  // let dataForm = new FormData();

  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url: image,
  });

   // dataForm.append(data)

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
