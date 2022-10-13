import { baseUrl } from "../../settings/api.js";
import { getToken } from "../storage.js";

/**
 * Deletes a product
 */

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export function deleteButton() {
  const deleteContainer = document.querySelector(".delete-container");
  deleteContainer.innerHTML = `<button type="button" class="delete btn">Delete</button>`;
  const button = document.querySelector("button.delete");

  button.onclick = async function () {
    const deleteItem = confirm("are you sure you want to delete this product?");

    if (deleteItem) {
      const api = baseUrl + "/products/" + id;

      const token = getToken();

      const option = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(api, option);
        const result = await response.json();
        location.href = "admin.html";
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
