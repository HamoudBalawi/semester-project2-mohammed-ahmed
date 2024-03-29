import { displayMessage } from "./displayMessage.js";
import { baseUrl } from "../../settings/api.js";
import { saveToken, saveUser } from "../storage.js";

/**
 * doLogin Logs in a user
 * @param {string} usernameValue value of username
 * @param {string} passwordValue value of password
 * @example
 * doLogin(name, password);
 * // Redirects a user to admin page on - succuss or display Invalid login username or password on - error
 */

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage("warning", "Invalid username or password", ".message-container");
  }

  doLogin(usernameValue, passwordValue);
}
async function doLogin(username, password) {
  const url = baseUrl + "/auth/local";
  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);
      location.href = "admin.html";
    }

    if (json.error) {
      displayMessage("warning", "Invalid login username or password", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
